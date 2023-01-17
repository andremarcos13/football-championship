import { Request, Response } from 'express';
import MatchService from '../service/MatchService';

export default class MatchController {
  constructor(private _matchService: MatchService) {}

  getAll = async (req: Request, res: Response):Promise<Response> => {
    const { inProgress } = req.query;
    if (inProgress) {
      const match = await this._matchService.findInProgressMatch(inProgress as string);
      return res.status(200).json(match);
    }
    const allMatches = await this._matchService.findAll();

    return res.status(200).json(allMatches);
  };
}
