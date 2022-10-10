const { response } = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../models/Users');
const { createJWT } = require('../helpers/jwt');


const createUser = async (req, res = response) => {
    try {
        let { nombre, email, password } = req.body;
        let user = await User.findOne({ 
            where:{email}
        })
        if (user) {
            return res.status(500).json({
                ok: false,
                msg: 'Existe un usuario registrado con este email'
            })
        }        
        //Encriptar contraseña 
        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt);

        const newUser = await User.create({
            nombre, 
            email, 
            password 
        });
        
        //Generar JWT
        const token = await createJWT(email, nombre)
        
        res.status(201).json({
            ok: true,
            newUser,
            token
        })
        
    } catch (error) {
        console.log(error )
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
};

const loginUser = async (req, res = response) => {
    const { email, password } = req.body
    try {
        let user = await User.findOne({
            where:{ email }
        })

        if (!user) {
            return res.status(500).json({
                ok: false,
                msg: 'El usuario con este email no exite'
            })
        }
        //Confirmar password        
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecta'
            })
        }
        //Generar JWT
        const token = await createJWT(user.email, user.nombre)
        res.status(201).json({
            ok: true,           
            name: user.nombre,          
            token
        });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    createUser,   
    loginUser
};