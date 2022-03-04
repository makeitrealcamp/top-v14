import { Router } from 'express';
import { userTokenValidation } from '../../auth/middleware';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';

import * as projectController from '../controllers/index';
import { editProjectValidateSchema } from '../utils/editProjectSchemaValidator';
import { createProjectSchema } from '../utils/projectValidator';

const router = Router();

router
  .route('/projects')
  .get(userTokenValidation, projectController.getAllProjects)
  .post(
    userTokenValidation,
    bodyRequestValidator(createProjectSchema),
    projectController.createProjectController
  );
router
  .route('/projects/:projectId')
  .put(
    userTokenValidation,
    bodyRequestValidator(editProjectValidateSchema),
    projectController.editOneProject
  )
  .delete(userTokenValidation, projectController.deleteOneProject);

export default router;
