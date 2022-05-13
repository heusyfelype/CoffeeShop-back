import { findOneProductController } from "../controllers/findOneProductController.js";

import { Router } from "express";

const productPageRouter = Router();

productPageRouter.get('/product', findOneProductController);

export default productPageRouter;