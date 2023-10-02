import request from "supertest";
import app from "../src/server";

describe("Form", () => {
  it("should be able create a form", async () => {
    const response = await request(app).post("/form").send({
      name: "test name",
      cpf: "test cpf",
      email: "test email",
      color: "test color",
      observation: "test observation",
    });

    expect(response.status).toBe(201);
  });

  it("should be able return a error to create a form", async () => {
    const response = await request(app).post("/form").send({
      email: "test email",
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });
});
