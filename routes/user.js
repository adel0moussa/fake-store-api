import express from 'express';
import userControllers from '../controllers/user.js';

const router = express.Router();

router.get('/form-sign-up', userControllers.signUpForm);
router.get('/form-login', userControllers.loginForm);
router.post('/sign-up', userControllers.signUp);
router.post('/login', userControllers.logIn);
router.get('/log-out', userControllers.logOut);

export default router;