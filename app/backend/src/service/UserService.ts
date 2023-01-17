import { compareSync } from 'bcryptjs';
import Users from '../database/models/UserModel';
import ErrorException from '../utils/Error';
import Jwt from '../utils/Jwt';

export default class UserService {
  constructor(private _jwt: Jwt) {}
  login = async (email:string, password:string): Promise<string> => {
    const user = await Users.findOne({ where: { email } });
    if (!user || !compareSync(password, user.password)) {
      throw new ErrorException(401, 'Incorrect email or password');
    }
    const token = this._jwt.createToken({ username: user.username,
      email: user.email,
      role: user.role as string });
    return token;
  };
}
