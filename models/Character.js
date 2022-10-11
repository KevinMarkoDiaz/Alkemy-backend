const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');

const Character = sequelize.define('personaje', {
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
  },
 
}, { timestamps: false });


module.exports = { Character };