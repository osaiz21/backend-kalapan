const { sequelize, Sequelize} = require('../config/config')
// Modelo del tabla Productos.
const categoria = sequelize.define('categoria', {
    nombre: {
      type: Sequelize.TEXT,
      field: 'nombre' 
    },
    descripcion: {
      type: Sequelize.TEXT,
      field:'descripcion'
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
  }
);

module.exports = { 
  categoria
}