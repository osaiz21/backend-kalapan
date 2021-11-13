const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'.env')})
const express = require('express')
const debug = require('debug')('kalapan:server')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
// Puerto por Default del Servicio
const port = process.env.PORT || '3000'
//body parser.
app.use(bodyParser.json())
// cors
app.use(cors())
// Formater Data.
app.use(express.json())
// Controladores.
const { 
  listarProductos,
  actualizarProductos,
  createProductos
} = require('./controlador/Productos')

// app.get('/productos', listarProductos)
app.get('/productos', listarProductos)
app.post('/productos', createProductos)
app.get('/', (req, res) => {
  res.send('En construccion');
})
// app.put('/productos/:id', actualizarProductos)

app.listen(port, () => {
    debug(`listen port: ${port}` )
})