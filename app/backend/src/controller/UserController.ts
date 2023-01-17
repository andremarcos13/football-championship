import { Request, Response } from 'express';
import UserService from '../service/UserService';
import ErrorException from '../utils/Error';

export default class UserController {
  constructor(private _userService: UserService) {}
  login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    try {
      const token = await this._userService.login(email, password);

      return res.status(200).json({ token });
    } catch (err) {
      const error = err as ErrorException;
      return res.status(error.statusCode).json({ message: error.message });
    }
  };

  tokenValidate = (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const { role } = this._userService.validateUserRole(authorization as string);
    return res.status(200).json({ role });
  };
}
