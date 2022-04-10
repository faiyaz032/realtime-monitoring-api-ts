//dependencies
import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, login, logout, updateUser } from '../../controllers/user';

const router = Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
router.post('/login', login);
router.post('/logout', logout);

export default router;
