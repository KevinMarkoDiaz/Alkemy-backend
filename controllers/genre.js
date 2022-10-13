const { response } = require('express');
const { Genre } = require('../models/Genre');

const getGenres = async (req, res = response) => {
 
    try {
        const data = await Genre.findAll()
    
        res.status(200).json({
            ok: true,
            data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            message: error
        })
    }
};
const createGenre = async (req, res = response) => {
    try {
        const { imagen, nombre, peliculaId } = req.body;
        console.log(peliculaId)

        const newGenre = await Genre.create({
            imagen,
            nombre,           
            peliculaId
        });
        res.status(201).json({
            ok: true,
            newGenre
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
};
const getGenre = async (req, res = response) => {
    const { id } = req.params
    try {
        const Genre = await Genre.findOne({
            where: { id }
        
        })
        res.status(200).json({
            ok: true,
            Genre
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: true,
            message: error
        })
    }
};
const deleteGenre = async (req, res = response) => {
    const { id } = req.params
    try {
        await Genre.destroy({
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
const updateGenre = async (req, res = response) => {
    const { id } = req.params
    const { imagen, nombre, edad, peso, historia } = req.body
    try {
        const Genre = await Genre.findByPk(id);
        Genre.imagen = imagen
        Genre.nombre = nombre     
        await Genre.save()
        return res.status(200).json({ ok: true, Genre })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
};

module.exports = {
    getGenres,
    createGenre,
    updateGenre,
    deleteGenre,
    getGenre
}