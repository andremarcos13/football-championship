import { Request, Response } from 'express';
import TeamService from '../service/TeamService';

export default class TeamController {
  constructor(private _teamService: TeamService) {}
  getAll = async (req: Request, res: Response): Promise<Response> => {
    const teams = await this._teamService.getAll();
    return res.status(200).json(teams);
  };
}
