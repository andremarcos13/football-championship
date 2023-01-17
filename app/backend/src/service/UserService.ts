import { compareSync } from 'bcryptjs';
import Users from '../database/models/UserModel';
import ErrorException from '../utils/Error';
import Jwt from '../utils/Jwt';
import { IUser } from '../interfaces/userInterface';

export default class UserService {
  constructor(private _jwt: Jwt) {}
  login = async (email:string, password:string): Promise<string> => {
    const user = await Users.findOne({ where: { email } });

    if (!user === null) {
      throw new ErrorException(401, 'All fields must be filled');
    }
    if (!user || !compareSync(password, user.password)) {
      throw new ErrorException(401, 'Incorrect email or password');
    }
    const token = this._jwt.createToken({ username: user.username,
      email: user.email,
      role: user.role as string });
    return token;
  };

  validateUserRole = (token: string): IUser => {
    const payload = this._jwt.validateToken(token);
    console.log('validateUserRole payload', token);
    return payload;
  };
}
