//dependencies
import dotenv from 'dotenv';
import express from 'express';
import { defaultErrorHandler, notFoundHandler } from './middlewares/errorHandlers';
import apiRouter from './routers';

//initialise the app
const app = express();

//configure env files
dotenv.config();

//enable middlewares
app.use(express.json());

app.use('/api', apiRouter);

app.all('*', notFoundHandler);
app.use(defaultErrorHandler);

export default app;
