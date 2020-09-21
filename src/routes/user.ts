import { Router } from 'express';
import { paramValidation, validateRequests } from '../middlewares';
import { getAllUsers, getUser } from '../controllers/user'
const router = Router();

router.get('/', getAllUsers);
router.get('/:id', paramValidation(), validateRequests, getUser);

export default router;
