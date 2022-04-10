import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import AppError from '../utils/AppError';

const sendDevelopmentError = (error: any, res: Response) => {
   res.status(error.statusCode).json({
      status: error.status,
      error: error,
      message: error.message,
      stack: error.stack,
   });
};
const sendProductionError = (error: any, res: Response) => {
   res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
   });
};

//not found handler
export const notFoundHandler = function (req: Request, res: Response, next: NextFunction) {
   next(new AppError(404, `Your requested url ${req.originalUrl} was not found in the server!`));
};

//default error handler
export const defaultErrorHandler: ErrorRequestHandler = function (error, req, res, next) {
   error.status = error.status || 'error';
   error.statusCode = error.statusCode || 500;

   if (process.env.NODE_ENV === 'development') sendDevelopmentError(error, res);
   else if (process.env.NODE_ENV === 'production') sendProductionError(error, res);
};
