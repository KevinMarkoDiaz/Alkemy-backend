const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/config');
const Genre = sequelize.define('generos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true 
  },
  imagen: {
    type: DataTypes.STRING
  }
}, { timestamps: false });

module.exports = { Genre };