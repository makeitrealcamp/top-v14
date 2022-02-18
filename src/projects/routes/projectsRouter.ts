import { Router } from 'express';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';
import { userTokenValidation } from '../../users/middlewares/userTokenValidation';
import * as projectController from '../controllers/index';
import { createProjectSchema } from '../utils/projectValidator';

const router = Router();

router
  .route('/projects')
  .get(userTokenValidation, projectController.getAllProjects)
  .post(
    // userTokenValidation,
    bodyRequestValidator(createProjectSchema),
    projectController.createProjectController
  );
// .put(userTokenValidation, projectController.editProject)
// .delete(userTokenValidation, projectController.deleteProject);

export default router;
