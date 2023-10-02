import { pool } from "../../config";
import { IForm } from "../../interfaces/IFormInterface";

import { IFormRepository } from "../IFormRepository";

export class PostgresUsersRepository implements IFormRepository {
  async save(form: IForm): Promise<void> {
    const client = await pool.connect();

    try {
      await client.query("BEGIN"); // Inicia a transação

      const formInsert = Object.keys(form).map(function (key) {
        // @ts-ignore
        return [Number(key), form[key]];
      });

      // Execute suas operações de banco de dados aqui
      const query = `INSERT INTO form
        (name, cpf, email, color, observation, createdAt) VALUES 
        ($1, $2, $3, $4, $5, $6)`;

      await pool.query(query, formInsert);

      await client.query("COMMIT"); // Confirma a transação
    } catch (error) {
      await client.query("ROLLBACK"); // Reverte a transação em caso de erro
      console.error("Erro durante a transação:", error);
    } finally {
      client.release(); // Libera a conexão de volta para o pool
    }
  }
}
