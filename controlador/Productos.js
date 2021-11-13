const debug = require('debug')('kalapan:controlador-productos')
const { productos, Op } = require('db')
const listarProductos = async (req,res) => {
    try {
        console.log(req.query.codigo)
        res.send(
            await productos.findAll({
                where: {
                    ["p.data->'codigo_barras'"] : {
                        [Op.and] : { 
                            codigo_barras :[req.query.codigo]
                        }
                    }
                }
            }) || []
        )
    }catch(error){
        await reportar(res, error)
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
        await reportar(res, error)
    }
}

const reportar = async (res, error) => {
    const mns = error.message || error.stack || 'Error no encontrado'
    res.send({
        mns
    })
}

const createProductos = async (req, res) => {
    try {
        const result = await productos.create(
            {
                data: {
                    ...req.body
                }
            }
        )
        res.send(result)
    }catch(error) {
        await reportar(res,error)
    }    
}

module.exports = {
    listarProductos,
    actualizarProductos,
    createProductos
}