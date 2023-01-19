import { Model, INTEGER, BOOLEAN } from 'sequelize';
import TeamModel from './TeamModel';
import db from '.';
import { IMatchTeamName } from '../../interfaces/matchInterface';

export default class Matches extends Model {
  declare id: number;
  declare homeTeam: number;
  declare awayTeam: number;
  declare homeTeamGoals: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
  declare teamHome: IMatchTeamName;
  declare teamAway: IMatchTeamName;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeam: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    allowNull: false,
  },

}, {
  sequelize: db,
  timestamps: false,
  modelName: 'matches',
  underscored: true,
});

Matches.belongsTo(TeamModel, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(TeamModel, { foreignKey: 'awayTeam', as: 'teamAway' });
TeamModel.hasMany(Matches, { foreignKey: 'homeTeam', as: 'matches' });
TeamModel.hasMany(Matches, { foreignKey: 'awayTeam', as: 'awayTeam' });
