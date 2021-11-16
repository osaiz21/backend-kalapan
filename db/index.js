const {creardefiniciones, sequelize} = require('./config/conexion')
const { productos }  = require('./models/productos')
const { categoria } = require('./models/categoria')
const debug = require('debug')('kalapan:db')

const ejecutar = async () => {
  try {
    await creardefiniciones(productos)
    await creardefiniciones(categoria)
  }catch(error) {
    console.error(error.message)
  }
}
// Ejecutamos Funcion

(function (){
  try {
    ejecutar();
  } catch (error) {
    console.error(error.message)
    debug('No se Puede Conectar a la db')
  }
})()

module.exports = {
  productos,
  categoria,
  sequelize
}


