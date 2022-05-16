import { Router } from 'express';

import { productInCartController } from '../controllers/productInCartController.js'
import { validProducsInCart } from '../middlewares/validProducsInCart.js';

const productInCartRouter = Router();

productInCartRouter.post('/cart', validProducsInCart, productInCartController);

export default productInCartRouter;