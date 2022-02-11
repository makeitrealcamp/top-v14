import { Router } from 'express';
import { createTask, findTask, getAllTasks } from '../controllers';

const router = Router();

router.post('/tasks', createTask);
router.get('/tasks/:taskId', findTask);
router.get('/tasks', getAllTasks);

export default router;
