import { Router } from 'express';

import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';
import { refreshToken } from '../controllers/refreshTokenController';
import { refreshTokenValidation } from '../middleware/refreshTokenValidation';

const router: Router = Router();

router.route('/refreshtoken').post(refreshTokenValidation, refreshToken);
// create bodyRequestValidator(refreshTokenSchema)
export default router;
