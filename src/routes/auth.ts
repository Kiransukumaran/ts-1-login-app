import { Router } from 'express';
import { validateRequests, loginBodyValidation, validateToken } from '../middlewares';
import { loginUser, getProfile } from '../controllers/auth'
const router = Router();

router.post('/login', loginBodyValidation(), validateRequests, loginUser);
router.get('/profile', validateToken, getProfile);

export default router;
