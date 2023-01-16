'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('matches', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
              },
              home_team: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              away_team: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              home_team_goals: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              away_team_goals: {
                type: Sequelize.STRING,
                allowNull: false,
              },
              in_progress: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
              }
        })
    },
    down: async(queryInterface) => {
        await queryInterface.dropTable('matches')
    }
} 