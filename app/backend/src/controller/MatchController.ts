import { Request, Response } from 'express';
import Jwt from '../utils/Jwt';
import MatchService from '../service/MatchService';
import ErrorException from '../utils/Error';

export default class MatchController {
  constructor(private _matchService: MatchService, private _jwt: Jwt) {}

  getAll = async (req: Request, res: Response):Promise<Response> => {
    const { inProgress } = req.query;
    if (inProgress) {
      const match = await this._matchService.findInProgressMatch(inProgress as string);
      return res.status(200).json(match);
    }
    const allMatches = await this._matchService.findAll();
    return res.status(200).json(allMatches);
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    const { authorization } = req.headers;
    try {
      const newMatch = await this._matchService.createMatch(req.body);
      this._jwt.validateToken(authorization as string);
      return res.status(201).json(newMatch);
    } catch (err) {
      const error = err as ErrorException;
      return res.status(error.statusCode).json({ message: error.message });
    }
  };

  finishMatch = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const nId = Number(id);
    console.log(nId);
    await this._matchService.finishMatch(nId, req.path, req.body);
    return res.status(200).json({ message: 'Finished' });
  };
}
