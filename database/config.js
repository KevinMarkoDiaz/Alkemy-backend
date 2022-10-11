const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('kevindb', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = { sequelize };