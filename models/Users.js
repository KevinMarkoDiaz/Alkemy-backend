const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const User = sequelize.define('usuarios', {
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  }
})

module.exports = { User }