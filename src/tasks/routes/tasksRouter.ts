import { Router } from "express";
import { createTask } from "../controllers/tasksController";

const router = Router();

router.post('/tasks', createTask);

export default router;