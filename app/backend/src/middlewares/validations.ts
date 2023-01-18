import { Request, Response, NextFunction } from 'express';
import ErrorException from '../utils/Error';
import TeamService from '../service/TeamService';

const userEmailPasswordValidate = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ErrorException(400, 'All fields must be filled');
  }
  next();
};

const matchValidate = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  if (homeTeam === awayTeam) {
    // throw new ErrorException(422, 'It is not possible to create a match with two equal teams');
    return res.status(422)
      .json({ message: 'It is not possible to create a match with two equal teams' });
  }
  try {
    const teamService = new TeamService();
    await teamService.getById(homeTeam);
    await teamService.getById(awayTeam);
  } catch (err) {
    // if (!homeTeam || !awayTeam) {
    return res.status(404)
      .json({ message: 'There is no team with such id!' });
    // }
  }
  next();
};

export { userEmailPasswordValidate, matchValidate };
