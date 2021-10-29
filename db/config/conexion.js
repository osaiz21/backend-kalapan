const { sequelize } = require('./config')
let instance = true
const conectar = async () => {
    try {
        if (instance) {
            sequelize.authenticate()
            instance = false
        }
    } catch (error) {
        console.error(error.message)
    }
}

const creardefiniciones = async ( deficiones ) => {
    try {
        await conectar()
        //console.error(deficiones)
        await deficiones.sync({force: false})
        
    }catch(error){
        console.error(error.message)
    }
}

module.exports = {
    creardefiniciones
}

