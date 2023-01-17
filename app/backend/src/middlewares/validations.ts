import { Request, Response, NextFunction } from 'express';
import ErrorException from '../utils/Error';

const userEmailPasswordValidate = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ErrorException(400, 'All fields must be filled');
  }
  next();
};

export default userEmailPasswordValidate;
