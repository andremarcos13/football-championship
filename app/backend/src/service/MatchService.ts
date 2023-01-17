import Matches from '../database/models/MatchModel';
import Teams from '../database/models/TeamModel';

export default class MatchService {
  private _teamsPlaying = [{ model: Teams, as: 'teamHome', attributes: ['teamName'] },
    { model: Teams, as: 'teamAway', attributes: ['teamName'] },
  ];

  findAll = async (): Promise<Matches[]> => {
    const getAll = await Matches.findAll({ include: this._teamsPlaying });
    return getAll;
  };

  findInProgressMatch = async (progress:string) => {
    const allInProgressMatch = await Matches
      .findAll({ where: { inProgress: progress === 'true' }, include: this._teamsPlaying });
    console.log('testeeeeee', allInProgressMatch);
    return allInProgressMatch;
  };
}
