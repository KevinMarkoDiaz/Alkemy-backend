const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const MovieOrSerie = sequelize.define('pelicula', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    unique: true 
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
  
}, { timestamps: false })


module.exports = { MovieOrSerie };