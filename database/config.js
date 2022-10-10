const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('alkemydb', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = { sequelize };