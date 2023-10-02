import { PostgresUsersRepository } from "../repositories/implementations/PostgresFormRepository";
import { FormService } from "../services/FormService";
import { FormController } from "./FormController";

const postgresUsersRepository = new PostgresUsersRepository();

const formService = new FormService(postgresUsersRepository);

const formController = new FormController(formService);

export { formService, formController };
