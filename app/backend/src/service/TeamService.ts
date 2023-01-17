import Teams from '../database/models/TeamModel';
import { ITeam } from '../interfaces/teamInterface';
import ErrorException from '../utils/Error';

export default class TeamService {
  getAll = async ():Promise<ITeam[]> => {
    const teams = await Teams.findAll();
    return teams;
  };

  getById = async (id:string):Promise<ITeam> => {
    const teamId = await Teams.findByPk(id);
    if (!teamId) {
      throw new ErrorException(404, 'No team');
    }
    return teamId;
  };
}
