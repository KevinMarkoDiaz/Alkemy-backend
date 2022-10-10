const jwt = require('jsonwebtoken');

const createJWT = (email, nombre) => {
  return new Promise((res, rej) => {
    const payload = { email, nombre };
    jwt.sign(payload, process.env.SECRET_JWT_SEED, {
      expiresIn: '24h'
    }, (err, token) => {
      if (err) {
        rej('No se pudo generar el token')
      }
      res(token);
    })
  })
};

module.exports = {
  createJWT
};