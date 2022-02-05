import { Router } from 'express';
import { createUser, deleteUser, editUser, getUsers } from '../controllers';

const router: Router = Router();

router.get('/users', getUsers);
// get one task
router.post('/users', createUser);

router.put('/users/:id', editUser);
//  edit status

router.delete('/users/:id', deleteUser)


export default router;