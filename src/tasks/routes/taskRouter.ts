import { Router } from 'express';
import { userTokenValidation } from '../../auth/middleware';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';

import { createTask, findTask, getAllTasks } from '../controllers';
import { createTaskSchema } from '../middlewares/taskSchemaValidator';

const router = Router();

// router.post('/tasks', createTask);
// router.get('/tasks/:taskId', findTask);
// router.get('/tasks', getAllTasks);

router
  .route('/tasks')
  .get(userTokenValidation, getAllTasks)
  .post(
    userTokenValidation,
    bodyRequestValidator(createTaskSchema),
    createTask
  );

export default router;
