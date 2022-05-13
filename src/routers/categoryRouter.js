import { Router } from 'express';

import { sendProductsController } from '../controllers/sendProductsController.js'

const categoryRouter = Router();

categoryRouter.get('/category-products', sendProductsController);

export default categoryRouter;