import { Router } from 'express';

import { purchaseController } from '../controllers/purchaseController';

const purchaseRouter = Router();

purchaseRouter.post('/purchase', purchaseController);

export default purchaseRouter;