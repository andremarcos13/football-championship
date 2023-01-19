import { Request, Response } from 'express';
import LeaderboardService from '../service/LeaderboardService';

export default class LeaderboardController {
  constructor(private _leaderboardService: LeaderboardService) {}

  leaderboard = async (_req: Request, res: Response) => {
    const result = await this._leaderboardService.allGamesLeaderboard();
    return res.status(200).json(result);
  };

  hleaderboard = async (_req: Request, res: Response) => {
    const result = await this._leaderboardService.homeGamesLeaderboard();
    console.log('home leaderboard', result);

    return res.status(200).json(result);
  };

  aleaderboard = async (_req: Request, res: Response) => {
    const result = await this._leaderboardService.awayGamesLeaderboard();
    console.log('away leaderboard', result);

    return res.status(200).json(result);
  };
}
