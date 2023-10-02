import { SelectOption } from 'interfaces';

export interface IForm {
  name: string;
  email: string;
  cpf: string;
  color?: SelectOption;
  observation?: string;
}

export interface IFormPost {
  name: string;
  color: SelectOption;
  observation: string;
  email: string;
  cpf: string;
}

export interface IFormPostApi {
  name: string;
  color: string;
  observation: string;
  email: string;
  cpf: string;
}
