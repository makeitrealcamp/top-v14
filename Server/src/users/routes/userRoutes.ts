import { Router } from 'express';
import { deleteUser, editUser, getUserById, getUsers } from '../controllers';
import uploadImagesMiddlewareOnMemory from '../../shared/middleware/uploadImagesOnMemoryMiddleware';

const router: Router = Router();

router.get('/users', getUsers);
// router.post('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', uploadImagesMiddlewareOnMemory, editUser);
router.delete('/users/:id', deleteUser);

export default router;
