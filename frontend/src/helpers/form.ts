import { IFormPostApi, IFormPost } from 'interfaces/form';
import { notMask } from 'utils/utils';

export function toApi(apiData: IFormPost): IFormPostApi {
  return {
    name: apiData.name,
    color: apiData.color && apiData.color.value,
    email: apiData.email,
    observation: apiData.observation,
    cpf: notMask(apiData.cpf),
  };
}
