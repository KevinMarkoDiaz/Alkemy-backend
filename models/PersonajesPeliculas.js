const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const PersonajesPeliculas = sequelize.define('PersonajesPeliculas',{
    PP_IDpelicula: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    PP_IDpersonaje: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    }   
  }
  )

module.exports = { PersonajesPeliculas }