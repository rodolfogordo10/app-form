import { Router } from "express";
import { formController } from "./controllers";

const router = Router();

router.get("/api/v1", (req, res) => {
  return res.send("Hello!");
});

router.post("/api/v1/form", (req, res) => formController.create(req, res));

export { router };