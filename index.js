const path = require('path')
require('dotenv').config({path: path.resolve(__dirname,'.env')})
const express = require('express')
const debug = require('debug')('kalapan:server')
const cors = require('cors')
const app = express()
// Puerto por Default del Servicio
const port = process.env.PORT || '3001'
// cors
app.use(cors())
// Formater Data.
app.use(express.json())
// Controladores.
// const { 
//   listarProductos,
//   actualizarProductos
// } = require('./controlador/Productos')

// app.get('/productos', listarProductos)
app.get('/productos', (req, res) => {
  res.send('hola Kalapan');
})
// app.put('/productos/:id', actualizarProductos)

app.listen(port, () => {
    debug(`listen port: ${port}` )
})