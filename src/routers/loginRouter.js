import { Router } from 'express';
import { loginController } from '../controllers/loginController.js';
import { validLogin } from '../middlewares/validLoginSchema.js';

const loginRouter = Router();

loginRouter.post('/login', validLogin, loginController);

export default loginRouter;