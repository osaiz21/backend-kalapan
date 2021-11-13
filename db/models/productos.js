const { sequelize, Sequelize} = require('../config/config')
// Modelo del tabla Productos.
const productos = sequelize.define('productos', {
  data: {
    type: Sequelize.JSONB(),
    field: 'data' 
  },
  createdAt: {
    allowNull: false,
    defaultValue: new Date(),
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    defaultValue: new Date(),
    type: Sequelize.DATE
  }
});

module.exports = { 
  productos
}