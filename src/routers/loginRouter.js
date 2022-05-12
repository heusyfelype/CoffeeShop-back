import { Router } from 'express';
import { userLogin } from '../controllers/loginController.js';
import { validLogin } from '../middlewares/validLoginSchema.js';

const loginRouter = Router();

loginRouter.post('/login', validLogin, userLogin);

export default loginRouter;