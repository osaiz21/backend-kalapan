const { sequelize, Sequelize} = require('../config/config')
// Modelo del tabla Productos.
const productos = sequelize.define('productos', {
  nombre: {
    type: Sequelize.TEXT,
    field: 'nombre' 
  },
  valor_publico: {
    type: Sequelize.BIGINT,
    field: 'valor_publico' 
  },
  valor_sugerido: {
    type: Sequelize.BIGINT,
    field: 'valor_sugerido' 
  },
  valor_compra: {
    type: Sequelize.BIGINT,
    field: 'valor_compra' 
  },
  categoria: {
    type: Sequelize.BIGINT,
    field: 'categoria' 
  },
  porcentaje_venta: {
    type: Sequelize.INTEGER,
    field: 'porcentaje_venta' 
  },
  observacion: {
    type: Sequelize.TEXT,
    field: 'observacion' 
  },
  cantidad: {
    type: Sequelize.INTEGER,
    field: 'cantidad' 
  },
  fecha_lote: {
    allowNull: false,
    defaultValue: new Date(),
    type: Sequelize.DATE
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