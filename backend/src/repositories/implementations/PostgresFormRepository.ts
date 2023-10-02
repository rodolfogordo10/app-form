import { pool } from "../../config";
import { IForm } from "../../interfaces/IFormInterface";

import { IFormRepository } from "../IFormRepository";

export class PostgresUsersRepository implements IFormRepository {
  async save(form: IForm): Promise<void> {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const formInsert: any[] = [
        form.formId,
        form.name,
        form.cpf,
        form.email,
        form.color,
        form.observation,
        form.createdAt
      ]
      
      // Object.keys(form).map(function (key) {
      //   // @ts-ignore
      //   formInsert.push(form[key]);
      // });

      const query = `INSERT INTO formschema.form
        (formid, name, cpf, email, color, observation, createdat) VALUES 
        ($1, $2, $3, $4, $5, $6, $7)`;

      await pool.query(query, formInsert);

      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      console.error("Erro durante a transação:", error);
    } finally {
      client.release();
    }
  }
}
