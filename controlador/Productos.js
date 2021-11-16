const debug = require('debug')('kalapan:controlador-productos')
const { productos, sequelize, QueryTypes } = require('db')
const listarProductos = async (req,res) => {
    try {
       const result = await sequelize.query(
           `select
                distinct
                t.id,
                t.data 
            from (
            select
                replace(jsonb_array_elements(p.data->'codigo_barras')::text,'"','') as condicional,	
                p.id,
                P.data
            from
                productos p
            where 
                p.data->'activo'::text = '1'
            ) as t where t.condicional = '${req.query.codigo}'`,
           {
            type: QueryTypes,
            plain: false,
            raw: false
           }
        );
        const newResult = result[0].map(key => key.data)
        res.send(newResult)
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