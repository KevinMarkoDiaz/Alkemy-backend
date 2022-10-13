const { response } = require('express');
const { Op } = require('sequelize');
const { Character } = require('../models/Character');
const { MovieOrSerie } = require('../models/MovieOrSeries');

const getCharacters = async (req, res = response) => {

    const { name = "", age = 0, weight = "", movies = "" } = req.query
    console.log(555555, !!req.query.name)
    try {
        const data = (!!req.query.name)
            ? await Character.findAll({

                where: {
                    [Op.and]: {
                        nombre: name,
                        [Op.or]: [{ peso: weight }, { edad: age }, {nombre: name}]
                    }
                }
            })
            : await Character.findAll()
        const characters = data.map(character => ({nombre:character.nombre, imagen:character.imagen }))  
        res.status(200).json({
            ok: true,
            characters
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            message: error
        })
    }
};
const createCharacter = async (req, res = response) => {
    try {
        const { imagen, nombre, edad, peso, historia, peliculaId } = req.body;
        console.log(peliculaId)

        const newCharacter = await Character.create({
            imagen,
            nombre,
            edad,
            peso,
            historia,
            peliculaId
        });
        console.log(newCharacter)
        res.status(201).json({
            ok: true,
            newCharacter
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
};
const getCharacter = async (req, res = response) => {
    const { id } = req.params
    try {
        const character = await Character.findOne({
            where: { id },
            include: MovieOrSerie
        })
        res.status(200).json({
            ok: true,
            character
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: true,
            message: error
        })
    }
};
const deleteCharacter = async (req, res = response) => {
    const { id } = req.params
    try {
        await Character.destroy({
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
const updateCharacter = async (req, res = response) => {
    const { id } = req.params
    const { imagen, nombre, edad, peso, historia } = req.body
    try {
        const character = await Character.findByPk(id);
        character.imagen = imagen
        character.nombre = nombre
        character.edad = edad
        character.peso = peso
        character.historia = historia
        await character.save()
        return res.status(200).json({ ok: true, character })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: error
        })
    }
};

module.exports = {
    getCharacters,
    createCharacter,
    updateCharacter,
    deleteCharacter,
    getCharacter
}