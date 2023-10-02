import { useMemo } from 'react';
import { isValidCpf } from 'helpers/validate';

import * as Yup from 'yup';

export function useValidationSchema() {
  return useMemo(
    () =>
      Yup.object({
        name: Yup.string().required('Nome completo é obrigatório.'),
        email: Yup.string()
          .email('Email inválido.')
          .required('Email é obrigatório.'),
        cpf: Yup.string()
          .required('CPF é obrigatório.')
          .test({
            message: 'CPF inválido.',
            test: (value) => {
              return isValidCpf(value);
            },
          }),
      }),
    [],
  );
}
