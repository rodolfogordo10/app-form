import { apiBackend } from 'services/api';

import { ResponseApi } from 'interfaces';
import { IFormPostApi } from 'interfaces/form';

export const postForm = async (payload: IFormPostApi): Promise<ResponseApi> => {
  const { data } = await apiBackend.post(`/form`, payload);

  return data;
};
