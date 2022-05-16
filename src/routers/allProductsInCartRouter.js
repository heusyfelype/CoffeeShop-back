import { Router } from 'express';

import { allProductsInCartController } from '../controllers/allProductsInCartController.js'

const allProductsInCartRouter = Router();

allProductsInCartRouter.get('/cart', allProductsInCartController);

export default allProductsInCartRouter;