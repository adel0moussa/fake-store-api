import express from 'express';
const userRoutes = express.Router();

import userController from '../controllers/user.js';

// set cookie and session
userRoutes.get('/', userController.setCookiesAndSession);

//get cookie & session
userRoutes.get('/verify', userController.verifyCookiesAndSession);

export default userRoutes;