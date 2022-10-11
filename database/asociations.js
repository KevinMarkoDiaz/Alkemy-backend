const { Genre } = require("../models/Genre");
const { MovieOrSerie } = require("../models/MovieOrSeries");
const { Character } = require("../models/Character");

MovieOrSerie.belongsToMany(Character, {
    as: "personajes",
    through: "PersonajesPeliculas",
    foreignKey: "PP_IDpelicula",
  });
Character.belongsToMany(MovieOrSerie, {
    as: "peliculas",
    through: "PersonajesPeliculas",
    foreignKey: "PP_IDpersonaje",
  });

Genre.hasMany(MovieOrSerie, { as: "pelicula_o_serie", foreignKey: 'genre_id' });
MovieOrSerie.belongsTo(Genre, { as: 'nombre' });
