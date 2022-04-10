//dependencies
import { Router } from 'express';
import checkRoutes from './api/check';
//internal imports
import userRoutes from './api/user';

//initialise routers
const router = Router();

//register routers here
router.use('/user', userRoutes);
router.use('/check', checkRoutes);

export default router;
