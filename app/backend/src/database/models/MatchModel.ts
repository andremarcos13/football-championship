import { Model, STRING, INTEGER, BOOLEAN } from 'sequelize';
import TeamModel from './TeamModel';
import db from '.';

export default class Matches extends Model {
  declare id: number;
  declare homeTeam: string;
  declare awayTeam: string;
  declare homeTeamGoals: string;
  declare awayTeamGoals: string;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeam: {
    type: STRING,
    allowNull: false,
  },
  awayTeam: {
    type: STRING,
    allowNull: false,
  },
  homeTeamGoals: {
    type: STRING,
    allowNull: false,
  },
  awayTeamGoals: {
    type: STRING,
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
