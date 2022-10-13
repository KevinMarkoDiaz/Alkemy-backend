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

Genre.hasMany(MovieOrSerie, {foreignKey: 'genre_id', targetId: 'id'} );
MovieOrSerie.belongsTo(Genre, {foreignKey: 'genre_id', targetId: 'id'});
