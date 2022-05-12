import { Router } from 'express';
import { inputProduct } from '../controllers/inputProduct.js';
import { validInputProductSchema } from '../middlewares/validInputProductSchema.js';

const inputProductRouter = Router();

inputProductRouter.post('/input-product', validInputProductSchema, inputProduct);

export default inputProductRouter;