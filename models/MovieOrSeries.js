const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const { Character } = require('./Character');
const MovieOrSeries = sequelize.define('peliculas o series', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING
  },
  fecha_de_creacion: {
    type: DataTypes.DATE
  },
  calificacion: {
    type: DataTypes.INTEGER
  },
});

MovieOrSeries.hasMany(Character, {
  foreignKey: 'movieOrSerieId',
  sourceKey: 'id'
});

Character.belongsTo(MovieOrSeries, {
  foreignKey: 'movieOrSerieId',
  targetId: 'id'
});

module.exports = { MovieOrSeries };