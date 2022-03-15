import { Router } from 'express';
import { checkoutController } from '../controller/checkoutController';

const router = Router();

router.route('/checkout').post(checkoutController);

export default router;
