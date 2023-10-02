import { IForm } from "../interfaces/IFormInterface";
import { IFormRepository } from "../repositories/IFormRepository";

export class FormService {
  constructor(private formRepository: IFormRepository) {}

  async execute(form: IForm): Promise<IForm> {
    form.createdAt = new Date();

    await this.formRepository.save(form);

    return form;
  }
}
