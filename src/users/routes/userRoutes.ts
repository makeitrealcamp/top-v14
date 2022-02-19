import { Router } from 'express';
import { deleteUser, editUser, getUserById, getUsers } from '../controllers';

const router: Router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', editUser);
router.delete('/users/:id', deleteUser);

export default router;
