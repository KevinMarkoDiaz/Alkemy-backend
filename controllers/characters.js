const { response } = require('express');
const { Character } = require('../models/Character');

const getCharacters = async (req, res = response) => {

    try {
        const data = await Character.findAll({
            order:[
                ["nombre"]
            ]
        })
        const characters = data.map(character => ({nombre:character.nombre, imagen:character.imagen }))
        res.status(200).json({
            ok: true,
            characters           
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            messaage: error
        })
    }
};
const createCharacter = async (req, res = response) => {
    try {
        const { imagen, nombre, edad, peso, historia } = req.body;
        const newCharacter = await Character.create({
            imagen,
            nombre,
            edad,
            peso,
            historia            
        });
        res.status(201).json({
            ok: true,
            newCharacter
        });
    } catch (error) {
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

        })
        res.status(200).json({
            ok: true,
            character
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            messaage: error
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
    const {imagen, nombre, edad, peso, historia} = req.body
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