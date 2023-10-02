import { Request, Response } from "express";
import { ValidationError } from "yup";
import { IForm } from "../interfaces/IFormInterface";
import { FormService } from "../services/FormService";
import formSchema from "../validation/FormValidation";

export class FormController {
  constructor(private formService: FormService) {}

  async create(req: Request, res: Response): Promise<Response> {
    const { name, cpf, email, color, observation } = req.body;

    try {
      const form: IForm = {
        name: name,
        cpf: cpf,
        email: email,
        color: color,
        observation: observation,
      };

      await formSchema.validate(form);

      await this.formService.execute(form);

      return res.status(201).send();
    } catch (err: any) {
      if (err instanceof ValidationError) {
        return res.status(400).json({ error: (err as ValidationError).errors });
      }

      return res.status(500).json({ error: err.message });
    }
  }
}
