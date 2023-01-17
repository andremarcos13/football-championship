import { Request, Response, NextFunction } from 'express';
import ErrorException from '../utils/Error';

const errorHandlerMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): Response => {
  const { statusCode, message } = err as ErrorException;
  return res.status(statusCode || 500).json({ message });
};

export default errorHandlerMiddleware;
