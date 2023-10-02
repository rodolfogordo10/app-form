import { toast, ToastContent, ToastOptions } from 'react-toastify';

import { ApiError, ResponseApi } from 'interfaces';
import { isApiError, isAxiosError } from 'services/helpers';

interface NotificationErrorProps {
  error: Error | ApiError;
  message?: string;
  options?: ToastOptions;
}

export function notificationState(reponse?: ResponseApi) {
  if (reponse.error && Array.isArray(reponse.error) && reponse.error.length > 0)
    return notificationWarning(reponse.error[0]);

  return notificationSuccessInsert();
}

export function notification(message: ToastContent, options?: ToastOptions) {
  toast(message, {
    ...options,
    bodyStyle: {
      fontSize: 14,
      fontFamily: 'Montserrat',
    },
  });
}

export function notificationSuccess(message: string, options?: ToastOptions) {
  notification(message, {
    ...options,
    type: 'success',
  });
}

export function notificationWarning(message: string, options?: ToastOptions) {
  notification(message, {
    ...options,
    type: 'warning',
  });
}

export function notificationError(props: NotificationErrorProps) {
  const { message, options, error } = props;
  if (error && process.env.NODE_ENV === 'development') {
    if (isAxiosError(error)) {
      const res = error.response?.data;
      if (
        res &&
        typeof res === 'object' &&
        'code' in res &&
        (res.code === 'validation.error' || res.code === 'validationError')
      ) {
        if ('details' in res && Array.isArray(res.details)) {
          // eslint-disable-next-line no-console
          console.table(
            res.details.map((d: { field: string; message: string }) => ({
              field: d.field,
              message: d.message,
            })),
          );
        } else if ('message' in res) {
          console.warn(res.message);
        }
      }
    } else {
      console.error(message, error);
    }
  }
  let apiMessages: string[] = [];
  let apiMessage: string | undefined;
  if (isApiError(error)) {
    apiMessage = error.message;
  } else if (isAxiosError(error)) {
    const res = error.response?.data;
    if (
      res &&
      typeof res === 'object' &&
      'code' in res &&
      (res.code === 'validation.error' || res.code === 'validationError')
    ) {
      if ('details' in res && Array.isArray(res.details)) {
        apiMessages = res.details.map((d: { message: string }) => d.message);
      } else if ('message' in res) {
        apiMessage = res.message;
      }
    } else if (isApiError(res)) {
      apiMessage = res.message;
    }
  }
  if (message) {
    if (apiMessage) {
      notification(
        <>
          <div>{message}</div>
          <p>{apiMessage}</p>
        </>,
        {
          ...options,
          type: 'error',
        },
      );
    } else if (apiMessages.length > 0) {
      apiMessages.forEach((m) => {
        notification(m, {
          ...options,
          type: 'error',
        });
      });
    } else {
      notification(message, {
        ...options,
        type: 'error',
      });
    }
  } else {
    if (apiMessages.length > 0) {
      apiMessages.forEach((m) => {
        notification(m, {
          ...options,
          type: 'error',
        });
      });
    } else {
      notification(apiMessage || 'Erro na API', {
        ...options,
        type: 'error',
      });
    }
    throw props;
  }
}

export function notificationSuccessInsert(
  message = 'Dados salvos com sucesso!',
  options?: ToastOptions,
) {
  notificationSuccess(message, options);
}

export function notificationSuccessUpdate(
  message = 'Dados alterados com sucesso!',
  options?: ToastOptions,
) {
  notificationSuccess(message, options);
}

export function notificationSuccessDelete(
  message = 'Registro(s) excluído(s)!',
  options?: ToastOptions,
) {
  notificationSuccess(message, options);
}
