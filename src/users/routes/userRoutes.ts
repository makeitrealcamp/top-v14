import { Router } from 'express';
import { userValidationMidleware } from '../middlewares/requestValidation';
import {
  createUser,
  deleteUser,
  editUser,
  getUserById,
  getUsers,
} from '../controllers';
import { userLogin } from '../../auth/controllers/authLoginController';
import {
  loginUserSchema,
  signUpUserSchema,
} from '../middlewares/userSchemaValidator';
import { bodyRequestValidator } from '../../shared/validators/bodyRequestValidators';

const router: Router = Router();

router.post('/login', bodyRequestValidator(loginUserSchema), userLogin);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', userValidationMidleware, createUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

router
  .route('/signup')
  .post(bodyRequestValidator(signUpUserSchema), createUser);

export default router;
