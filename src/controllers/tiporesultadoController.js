'use strict'
const {TipoResultadoEjecucion} = require('../database/db.config');

const controller = {
    getCombo: async (req,res) =>{
        try {
            const data = await TipoResultadoEjecucion.findAll();
            if(data !== null) {
                res.status(200).send(data);
            }else{
                res.status(204);
            }
        } catch (error) {
            res.status(500).send({
                error: error.message
            });
        }
    }
}

module.exports = controller