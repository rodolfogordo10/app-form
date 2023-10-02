import { IForm } from "../interfaces/IFormInterface";

export interface IFormRepository {
  save(form: IForm): Promise<void>;
}
