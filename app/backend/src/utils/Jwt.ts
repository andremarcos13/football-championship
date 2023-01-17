import 'dotenv/config';
import { sign, verify } from 'jsonwebtoken';
import ErrorException from './Error';
import UserModel from '../database/models/UserModel';
import { IUser } from '../interfaces/userInterface';

export default class Jwt {
  private _secret: string;
  constructor() {
    this._secret = process.env.JWT_SECRET as string;
  }

  createToken(payload:IUser):string {
    const token = sign(payload, this._secret);
    return token;
  }

  validateToken(token: string):UserModel {
    try {
      const payload = verify(token, this._secret) as UserModel;
      return payload;
    } catch (error) {
      throw new ErrorException(401, 'Token not valid');
    }
  }
}
