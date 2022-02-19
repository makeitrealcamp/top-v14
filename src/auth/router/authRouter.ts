import { Router } from 'express';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';
import { authLogin, authSignup, refreshToken } from '../controllers';
import { refreshTokenValidation } from '../middleware/refreshTokenValidation';
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
export default router;
