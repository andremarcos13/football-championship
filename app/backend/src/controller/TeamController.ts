import { Request, Response } from 'express';
import TeamService from '../service/TeamService';
import ErrorException from '../utils/Error';

export default class TeamController {
  constructor(private _teamService: TeamService) {}
  getAll = async (req: Request, res: Response): Promise<Response> => {
    const teams = await this._teamService.getAll();
    return res.status(200).json(teams);
  };

  getById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const nId = Number(id);
    try {
      const { teamName } = await this._teamService.getById(id);
      return res.status(200).json({ id: nId, teamName });
    } catch (err) {
      const error = err as ErrorException;
      return res.status(error.statusCode).json({ message: error.message });
    }
  };
}
