import { Router } from 'express';
import { userValidationMidleware } from '../middlewares/requestValidation';
import { createUser, deleteUser, editUser, getUsers } from '../controllers';

const router: Router = Router();

router.get('/users', userValidationMidleware, getUsers);
// get one task
router.post('/users', userValidationMidleware, createUser);

router.put('/users/:id', editUser);
//  edit status

router.delete('/users/:id', deleteUser)


export default router;