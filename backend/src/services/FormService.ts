import { v4 } from 'uuid'
import { IForm } from "../interfaces/IFormInterface";
import { IFormRepository } from "../repositories/IFormRepository";

export class FormService {
  constructor(private formRepository: IFormRepository) {}

  async execute(form: IForm): Promise<IForm> {
    form.formId = v4();
    form.createdAt = (new Date()).toString();

    await this.formRepository.save(form);

    return form;
  }
}
