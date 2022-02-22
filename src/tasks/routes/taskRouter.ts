import { Router } from 'express';
import { userTokenValidation } from '../../auth/middleware';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';

import { createTask, deleteTask, findTask, getAllTasks } from '../controllers';
import { createTaskSchema } from '../middlewares/taskSchemaValidator';

const router = Router();

// router.post('/tasks', createTask);
router.delete('/tasks/:taskId', deleteTask);
// router.get('/tasks', getAllTasks);

router
  .route('/tasks')
  .get(getAllTasks)
  .post(
    userTokenValidation,
    bodyRequestValidator(createTaskSchema),
    createTask
  );

export default router;
