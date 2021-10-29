const debug = require('debug')('kalapan:controlador-productos')
const { productos } = require('db')
const listarProductos = async (req,res) => {
    try {
        res.send(
            await productos.findAll() || []
        )
    }catch(error){
        await reportar(error)
    }
}
const actualizarProductos = async (req,res) => {
    try{
        // Results
        const results = await  productos.findAll({
            where: {
                id: req.params.id
            }

        })
        const data = await productos.update(
            {
                ...req.body
            },{
                where:
                { 
                    id: req.params.id
                }
            }
        )
        // Respuesta.
        res.send(
            {
                mns: ` Actualizacion Exitosa ${results[0]._previousDataValues.nombre}`
            }
        )
    } catch (error){
        await reportar(error)
    }
}

const reportar = async (res, error) => {
    const mns = error.message || error.stack || 'Error no encontrado'
    res.send({
        mns
    })
}
module.exports = {
    listarProductos,
    actualizarProductos
}