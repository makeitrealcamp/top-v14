import { Router } from 'express';
import {
  authLoginController,
  authSignupController,
  refreshToken,
  recoveryPasswordController,
  updatePasswordController,
  validateUserController,
} from '../controllers';

import { refreshTokenValidation } from '../middleware/refreshTokenValidation';
import { userTokenValidationParams } from '../middleware/userTokenValidationParams';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';
import {
  loginUserSchema,
  signUpUserSchema,
} from '../utils/userSchemaValidator';
import { oauthController } from '../controllers/oauthController';

const router: Router = Router();

router
  .route('/signup')
  .post(bodyRequestValidator(signUpUserSchema), authSignupController);
router
  .route('/login')
  .post(bodyRequestValidator(loginUserSchema), authLoginController);

router.route('/refreshtoken').post(refreshTokenValidation, refreshToken);

router
  .route('/validate/:token')
  .get(userTokenValidationParams, validateUserController);

router.route('/recovery').post(recoveryPasswordController);
router.route('/recovery/:id/:token').post(updatePasswordController);

router.route('/oauth/google').get(oauthController);

export default router;
