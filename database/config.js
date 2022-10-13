const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('marcodbd', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = { sequelize };