import { Router } from 'express';
import { userValidationMidleware } from '../middlewares/requestValidation';
import {
  createUser,
  deleteUser,
  editUser,
  getUserById,
  getUsers,
} from '../controllers';
import { userLogin } from '../controllers/userLoginController';

const router: Router = Router();

router.post('/login', userLogin);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', userValidationMidleware, createUser);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

router.route('/signup').post(userValidationMidleware, createUser);

export default router;
