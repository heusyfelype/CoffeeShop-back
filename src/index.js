import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { mongoConnection } from './mongoDB.js';

import signUpRouter from './routers/signUpRouter.js';
import loginRouter from './routers/loginRouter.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(signUpRouter);
app.use(loginRouter)

const port = process.env.PORT || 5000;

app.listen(port, () => {

    mongoConnection();
    console.log('CoffeeShop API is Running!');

});