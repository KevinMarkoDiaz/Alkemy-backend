const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const { MovieOrSeries } = require('./MovieOrSeries');

const Character = sequelize.define('personajes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  imagen: {
    type: DataTypes.STRING
  },
  nombre: {
    type: DataTypes.STRING,
  },
  edad: {
    type: DataTypes.INTEGER
  },
  peso: {
    type: DataTypes.STRING
  },
  historia: {
    type: DataTypes.STRING
  }
});

module.exports = { Character };