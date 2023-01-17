import Teams from '../database/models/TeamModel';
import { ITeam } from '../interfaces/teamInterface';

export default class TeamService {
  getAll = async ():Promise<ITeam[]> => {
    const teams = await Teams.findAll();
    console.log('teams', teams);

    return teams;
  };
}
