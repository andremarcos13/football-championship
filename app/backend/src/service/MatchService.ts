import Matches from '../database/models/MatchModel';
import Teams from '../database/models/TeamModel';
import { IMatch } from '../interfaces/matchInterface';
// import ErrorException from '../utils/Error';

export default class MatchService {
  public _teamsPlaying = [{
    model: Teams,
    as: 'teamHome',
    attributes: ['teamName'] },
  {
    model:
      Teams,
    as: 'teamAway',
    attributes: ['teamName'] },
  ];

  findAll = async (): Promise<Matches[]> => {
    const getAll = await Matches.findAll({ include: this._teamsPlaying });
    return getAll;
  };

  findInProgressMatch = async (progress:string) => {
    const allInProgressMatch = await Matches
      .findAll({ where: { inProgress: progress === 'true' }, include: this._teamsPlaying });
    return allInProgressMatch;
  };

  createMatch = async (payload: IMatch): Promise<IMatch> => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = payload;
    console.log('payload service', payload);

    const { dataValues } = await Matches
      .create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true });
    return dataValues;
  };

  finishMatch = async (id: number, path: string, body: IMatch) => {
    if (path.includes('finish')) {
      const [finishedMatch] = await Matches.update({ inProgress: false }, { where: { id } });
      return finishedMatch;
    }
    const { homeTeamGoals, awayTeamGoals } = body;
    const [editedLeaderboard] = await Matches
      .update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return editedLeaderboard;
  };
}
