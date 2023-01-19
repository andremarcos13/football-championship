import { ILeaderBoard } from '../interfaces/leaderboardInterface';
import LeaderboardFunctions from '../utils/leaderboardFunctions';
import TeamService from './TeamService';
import MatchService from './MatchService';

export default class Leaderboard {
  public teamService: TeamService;
  public matchService: MatchService;
  public leaderboardFunctions = new LeaderboardFunctions();

  constructor() {
    this.matchService = new MatchService();
    this.teamService = new TeamService();
  }

  classification = (array:ILeaderBoard[]) => {
    array.sort((a, b) =>
      b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn);
    return array;
  };

  efficiencyCalculator = (points: number, matches: number): string => (
    ((points / (matches * 3)) * 100).toFixed(2)
  );

  allGamesLeaderboard = async () => {
    const allTeams = await this.teamService.getAll();
    const filterProg = await this.matchService.findInProgressMatch('false');
    const teamsClassification = allTeams.map((elem) => ({
      name: elem.teamName,
      totalPoints: this.leaderboardFunctions.score(filterProg, elem.id),
      totalGames: this.leaderboardFunctions.allGames(filterProg, elem.id),
      totalVictories: this.leaderboardFunctions.allVictories(filterProg, elem.id),
      totalDraws: this.leaderboardFunctions.allDraws(filterProg, elem.id),
      totalLosses: this.leaderboardFunctions.allLosses(filterProg, elem.id),
      goalsFavor: this.leaderboardFunctions.allGoals(filterProg, elem.id).goals,
      goalsOwn: this.leaderboardFunctions.allGoals(filterProg, elem.id).ownGoals,
      goalsBalance: this.leaderboardFunctions.allGoals(filterProg, elem.id).goals
       - this.leaderboardFunctions.allGoals(filterProg, elem.id).ownGoals,
      efficiency: this.efficiencyCalculator(
        this.leaderboardFunctions.score(filterProg, elem.id),
        this.leaderboardFunctions.allGames(filterProg, elem.id),
      ),
    })); return this.classification(teamsClassification);
  };

  homeGamesLeaderboard = async () => {
    const allTeams = await this.teamService.getAll();
    const filterProg = await this.matchService.findInProgressMatch('false');
    const teamsClassification = allTeams.map((elem) => ({
      name: elem.teamName,
      totalPoints: this.leaderboardFunctions.scoreHomeTeam(filterProg, elem.id),
      totalGames: this.leaderboardFunctions.allGamesHomeTeam(filterProg, elem.id),
      totalVictories: this.leaderboardFunctions.allVictoriesHomeTeam(filterProg, elem.id),
      totalDraws: this.leaderboardFunctions.allDrawsHomeTeam(filterProg, elem.id),
      totalLosses: this.leaderboardFunctions.allLossesHomeTeam(filterProg, elem.id),
      goalsFavor: this.leaderboardFunctions.allGoalsHomeTeam(filterProg, elem.id).goals,
      goalsOwn: this.leaderboardFunctions.allGoalsHomeTeam(filterProg, elem.id).ownGoals,
      goalsBalance: this.leaderboardFunctions.allGoalsHomeTeam(filterProg, elem.id).goals
       - this.leaderboardFunctions.allGoalsHomeTeam(filterProg, elem.id).ownGoals,
      efficiency: this.efficiencyCalculator(
        this.leaderboardFunctions.scoreHomeTeam(filterProg, elem.id),
        this.leaderboardFunctions.allGamesHomeTeam(filterProg, elem.id),
      ),
    })); return this.classification(teamsClassification);
  };

  awayGamesLeaderboard = async () => {
    const allTeams = await this.teamService.getAll();
    const filterProg = await this.matchService.findInProgressMatch('false');
    const teamsClassification = allTeams.map((elem) => ({
      name: elem.teamName,
      totalPoints: this.leaderboardFunctions.scoreAwayTeam(filterProg, elem.id),
      totalGames: this.leaderboardFunctions.allGamesAwayTeam(filterProg, elem.id),
      totalVictories: this.leaderboardFunctions.allVictoriesAwayTeam(filterProg, elem.id),
      totalDraws: this.leaderboardFunctions.allDrawsAwayTeam(filterProg, elem.id),
      totalLosses: this.leaderboardFunctions.allLossesAwayTeam(filterProg, elem.id),
      goalsFavor: this.leaderboardFunctions.allGoalsAwayTeam(filterProg, elem.id).goals,
      goalsOwn: this.leaderboardFunctions.allGoalsAwayTeam(filterProg, elem.id).ownGoals,
      goalsBalance: this.leaderboardFunctions.allGoalsAwayTeam(filterProg, elem.id).goals
       - this.leaderboardFunctions.allGoalsAwayTeam(filterProg, elem.id).ownGoals,
      efficiency: this.efficiencyCalculator(
        this.leaderboardFunctions.scoreAwayTeam(filterProg, elem.id),
        this.leaderboardFunctions.allGamesAwayTeam(filterProg, elem.id),
      ),
    })); return this.classification(teamsClassification);
  };
}
