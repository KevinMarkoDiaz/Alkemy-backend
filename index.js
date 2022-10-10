const express = require("express");
require("dotenv").config();
const cors = require('cors');
const {sequelize} = require('./database/config');
require('./models/Genre');

//Crear Servidor
app = express();
const ss = async ()=>{
    try {
        await sequelize.sync()
        console.log('coneccion a db correcta')
    } catch (error) {
        console.log("no s epudo conectar a db", error)
    }
}
ss()
//CORS
app.use(cors());

//Directorio publico
app.use(express.static("public"));

//Lectura y parseo de body
app.use(express.json());

//Rutas

//Auth
app.use("/auth", require("./routes/auth.routes"));
//Character
app.use("/characters", require("./routes/character.routes"));
//Movie or series
app.use("/movie-or-series", require("./routes/movieOrSeries.routes"));

//Escuchar peticiones
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});

