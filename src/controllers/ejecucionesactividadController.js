'use strict'
const {EjecucionesActividad, Actividad} = require('../database/db.config');

const controller = {
    getAllByEjecucionId: async(req,res) =>{
        try {
            const data = await EjecucionesActividad.findAll(
                {
                    where:{
                        EjecucionId: req.params.id
                    }
                }
            );

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
module.exports = controller;