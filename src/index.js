import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { mongoConnection } from './mongoDB.js';

import signUpRouter from './routers/signUpRouter.js';
import loginRouter from './routers/loginRouter.js'
import inputProduct from './routers/inputProductRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import productPageRouter from './routers/productPageRouter.js';
import productInCartRouter from './routers/productsInCartRouter.js';
import allProductsInCartRouter from './routers/allProductsInCartRouter.js';
import purchaseRouter from './routers/purchaseRouter.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(signUpRouter);
app.use(loginRouter);
app.use(inputProduct);
app.use(categoryRouter);
app.use(productPageRouter);
app.use(productInCartRouter);
app.use(allProductsInCartRouter)
app.use(purchaseRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {

    mongoConnection();
    console.log('CoffeeShop API is Running!');

});