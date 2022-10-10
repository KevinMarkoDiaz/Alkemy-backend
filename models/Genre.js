const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const { MovieOrSeries } = require('./MovieOrSeries');
const Genre = sequelize.define('generos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
  },
  imagen: {
    type: DataTypes.STRING
  },
  peliculas_o_series: {
    type: DataTypes.STRING
  }
});

Genre.hasMany(MovieOrSeries, {
  foreignKey: 'genreId',
  sourceKey: 'id'
});

MovieOrSeries.belongsTo(Genre, {
  foreignKey: 'genreId',
  targetId: 'id'
});

module.exports = { Genre };