import { Router } from 'express';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';
import { userTokenValidation } from '../../users/middlewares/userTokenValidation';
import { createTask, findTask, getAllTasks } from '../controllers';
import { createTaskSchema } from '../middlewares/taskSchemaValidator';

const router = Router();

// router.post('/tasks', createTask);
// router.get('/tasks/:taskId', findTask);
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
