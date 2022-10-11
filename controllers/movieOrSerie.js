const { response } = require('express');
const { Character } = require('../models/Character');
const { MovieOrSerie } = require('../models/MovieOrSeries');

const getMovieOrSeries = async (req, res = response) => {

    try {
        const movieOrSeries = await MovieOrSerie.findAll({
            include:Character
        })
       
        res.status(200).json({
            ok: true,
            movieOrSeries
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            messaage: error
        })
    }
};
const createMovieOrSerie = async (req, res = response) => {
    try {
        const { titulo, imagen, fecha_de_creacion, calificacion, personajeId } = req.body;
    
        const newmovieOrSerie = await MovieOrSerie.create({
            titulo, 
            imagen, 
            fecha_de_creacion, 
            calificacion,
            personajeId            
        });
        res.status(401).json({
            ok: true,
            newmovieOrSerie
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
};
const getMovieOrSerie = async (req, res = response) => {
    const  nid  = req.params.id
    const id = parseInt(nid)
    try {
        const movieOrSerie = await MovieOrSerie.findOne({
            where: { id },
            include:Character
        })
        console.log(movieOrSerie)
 
       
        res.status(200).json({
            ok: true,
            movieOrSerie
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            messaage: error
        })
    }
};
const deleteMovieOrSerie = async (req, res = response) => {
    const { id } = req.params
    try {
        await MovieOrSerie.destroy({
            where: { id }
        });
        return res.status(204).json({ ok: true })

    } catch (error) {    
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
};
const updateMovieOrSerie = async (req, res = response) => {
    const { id } = req.params
    const {
        titulo, 
        imagen, 
        fecha_de_creacion, 
        calificacion 
    } = req.body;

    try {
        const movieOrSeries = await MovieOrSerie.findByPk(id);
        movieOrSeries.titulo = titulo
        movieOrSeries.imagen = imagen
        movieOrSeries.fecha_de_creacion = fecha_de_creacion
        movieOrSeries.calificacion = calificacion

        await movieOrSeries.save()
        return res.status(200).json({ ok: true })
    } catch (error) {    
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
};

module.exports = {
    getMovieOrSeries,
    createMovieOrSerie,
    updateMovieOrSerie,
    deleteMovieOrSerie,
    getMovieOrSerie
}