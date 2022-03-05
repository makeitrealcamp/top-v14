import { Router } from 'express';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';
import { authLogin, authSignup, refreshToken } from '../controllers';
import { recoveryPasswordController } from '../controllers/recoveryPasswordController';
import { updatePasswordController } from '../controllers/updatePasswordController';
import { validateUserController } from '../controllers/validateUserController';
import { userTokenValidation } from '../middleware';
import { refreshTokenValidation } from '../middleware/refreshTokenValidation';
import { userTokenValidationParams } from '../middleware/userTokenValidationParams';
import {
  loginUserSchema,
  signUpUserSchema,
} from '../utils/userSchemaValidator';

const router: Router = Router();

router
  .route('/signup')
  .post(bodyRequestValidator(signUpUserSchema), authSignup);
router.route('/login').post(bodyRequestValidator(loginUserSchema), authLogin);
router.route('/refreshtoken').post(refreshTokenValidation, refreshToken);

router
  .route('/validate/:token')
  .post(userTokenValidationParams, validateUserController);

router.route('/recovery').post(recoveryPasswordController);
router.route('/recovery/:id/:token').post(updatePasswordController);

export default router;
