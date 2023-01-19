import { IMatch } from '../interfaces/matchInterface';

export default class LeaderboardFunctions {
  public scoreAwayTeam = (arrayOfMatches: IMatch[], id: number) => {
    let result = 0;
    arrayOfMatches.forEach((elem) => {
      if (elem.awayTeam === id) {
        if (elem.homeTeamGoals < elem.awayTeamGoals) result += 3;
        if (elem.homeTeamGoals === elem.awayTeamGoals) result += 1;
      }
    });
    return result;
  };

  public allGamesAwayTeam = (arrayOfGames: IMatch[], id:number) => {
    let result = 0;
    arrayOfGames.forEach((elem) => {
      if (elem.awayTeam === id) result += 1;
    });
    return result;
  };

  public allVictoriesAwayTeam = (arrayOfVictories: IMatch[], id:number) => {
    let result = 0;
    arrayOfVictories.forEach((elem) => {
      if (elem.awayTeam === id && elem.awayTeamGoals > elem.homeTeamGoals) result += 1;
    });
    return result;
  };

  public allDrawsAwayTeam = (arrayOfDraws: IMatch[], id:number) => {
    let result = 0;
    arrayOfDraws.forEach((elem) => {
      if (elem.awayTeam === id && elem.awayTeamGoals === elem.homeTeamGoals) result += 1;
    });
    return result;
  };

  public allLossesAwayTeam = (arrayOfLosses: IMatch[], id:number) => {
    let result = 0;
    arrayOfLosses.forEach((elem) => {
      if (elem.awayTeam === id && elem.awayTeamGoals < elem.homeTeamGoals) result += 1;
    });
    return result;
  };

  public allGoalsAwayTeam = (arrayOfGoals: IMatch[], id:number) => {
    let goals = 0;
    let ownGoals = 0;
    arrayOfGoals.forEach((elem) => {
      if (elem.awayTeam === id) {
        goals += elem.awayTeamGoals;
        ownGoals += elem.homeTeamGoals;
      }
    });
    return ({ goals, ownGoals });
  };

  public scoreHomeTeam = (arrayOfMatches: IMatch[], id: number) => {
    let result = 0;
    arrayOfMatches.forEach((elem) => {
      if (elem.homeTeam === id) {
        if (elem.homeTeamGoals > elem.awayTeamGoals) result += 3;
        if (elem.homeTeamGoals === elem.awayTeamGoals) result += 1;
      }
    });
    return result;
  };

  public allGamesHomeTeam = (arrayOfGames: IMatch[], id:number) => {
    let result = 0;
    arrayOfGames.forEach((elem) => {
      if (elem.homeTeam === id) result += 1;
    });
    return result;
  };

  public allVictoriesHomeTeam = (arrayOfVictories: IMatch[], id:number) => {
    let result = 0;
    arrayOfVictories.forEach((elem) => {
      if (elem.homeTeam === id && elem.awayTeamGoals < elem.homeTeamGoals) result += 1;
    });
    return result;
  };

  public allDrawsHomeTeam = (arrayOfDraws: IMatch[], id:number) => {
    let result = 0;
    arrayOfDraws.forEach((elem) => {
      if (elem.homeTeam === id && elem.awayTeamGoals === elem.homeTeamGoals) result += 1;
    });
    return result;
  };

  public allLossesHomeTeam = (arrayOfLosses: IMatch[], id:number) => {
    let result = 0;
    arrayOfLosses.forEach((elem) => {
      if (elem.homeTeam === id && elem.awayTeamGoals > elem.homeTeamGoals) result += 1;
    });
    return result;
  };

  public allGoalsHomeTeam = (arrayOfGoals: IMatch[], id:number) => {
    let goals = 0;
    let ownGoals = 0;
    arrayOfGoals.forEach((elem) => {
      if (elem.homeTeam === id) {
        goals += elem.homeTeamGoals;
        ownGoals += elem.awayTeamGoals;
      }
    });
    return ({ goals, ownGoals });
  };

  public score = (arrayOfMatches: IMatch[], id: number) => {
    let result = 0;
    arrayOfMatches.forEach((elem) => {
      if (elem.homeTeam === id) {
        if (elem.homeTeamGoals > elem.awayTeamGoals) result += 3;
        if (elem.homeTeamGoals === elem.awayTeamGoals) result += 1;
      }
      if (elem.awayTeam === id) {
        if (elem.homeTeamGoals < elem.awayTeamGoals) result += 3;
        if (elem.homeTeamGoals === elem.awayTeamGoals) result += 1;
      }
    });
    return result;
  };

  public allGames = (arrayOfGames: IMatch[], id:number) => {
    let result = 0;
    arrayOfGames.forEach((elem) => {
      if (elem.homeTeam === id || elem.awayTeam === id) result += 1;
    });
    return result;
  };

  public allVictories = (arrayOfVictories: IMatch[], id:number) => {
    let result = 0;
    arrayOfVictories.forEach((elem) => {
      if (elem.homeTeam === id && elem.awayTeamGoals < elem.homeTeamGoals) result += 1;
      if (elem.awayTeam === id && elem.awayTeamGoals > elem.homeTeamGoals) result += 1;
    });
    return result;
  };

  public allDraws = (arrayOfDraws: IMatch[], id:number) => {
    let result = 0;
    arrayOfDraws.forEach((elem) => {
      if (elem.homeTeam === id && elem.awayTeamGoals === elem.homeTeamGoals) result += 1;
      if (elem.awayTeam === id && elem.awayTeamGoals === elem.homeTeamGoals) result += 1;
    });
    return result;
  };

  public allLosses = (arrayOfLosses: IMatch[], id:number) => {
    let result = 0;
    arrayOfLosses.forEach((elem) => {
      if (elem.homeTeam === id && elem.awayTeamGoals > elem.homeTeamGoals) result += 1;
      if (elem.awayTeam === id && elem.awayTeamGoals < elem.homeTeamGoals) result += 1;
    });
    return result;
  };

  public allGoals = (arrayOfGoals: IMatch[], id:number) => {
    let goals = 0;
    let ownGoals = 0;
    arrayOfGoals.forEach((elem) => {
      if (elem.homeTeam === id) {
        goals += elem.homeTeamGoals;
        ownGoals += elem.awayTeamGoals;
      }
      if (elem.awayTeam === id) {
        goals += elem.awayTeamGoals;
        ownGoals += elem.homeTeamGoals;
      }
    });
    return ({ goals, ownGoals });
  };
}
