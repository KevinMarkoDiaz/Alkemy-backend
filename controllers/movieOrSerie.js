const { response } = require('express');
const { MovieOrSeries } = require('../models/MovieOrSeries');

const getMovieOrSeries = async (req, res = response) => {

    try {
        const movieOrSeries = await MovieOrSeries.findAll()
        console.log(first)
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
        const { titulo, imagen, fecha_de_creacion, calificacion } = req.body;
        const newmovieOrSerie = await MovieOrSeries.create({
            titulo, 
            imagen, 
            fecha_de_creacion, 
            calificacion 
        });
        res.status(401).json({
            ok: true,
            newmovieOrSerie
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
};
const getMovieOrSerie = async (req, res = response) => {
    const { id } = req.params
    try {
        const movieOrSerie = await MovieOrSeries.findOne({
            where: { id },

        })
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
        await MovieOrSeries.destroy({
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
        const movieOrSeries = await MovieOrSeries.findByPk(id);
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