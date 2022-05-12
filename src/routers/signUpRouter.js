import { Router } from 'express';

import { signUpController } from '../controllers/signUpController.js'
import { validSignUp } from '../middlewares/validSignUpSchema.js';

const signUpRouter = Router();

signUpRouter.post('/sign-up', validSignUp, signUpController);

export default signUpRouter;