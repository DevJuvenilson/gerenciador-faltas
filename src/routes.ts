import { Router } from "express";
import * as AlunosController from "./controllers/alunos-controller";

const router = Router();

router.post("/perguntas", AlunosController.postAlunos);

export default router;