'use strict'
const {Actividad} = require('../database/db.config');
const { Op } = require("sequelize");

const controller = {
    getAllByIds: async (req,res) =>{
        try {

            const data = await Actividad.findAll({
                where:{
                    ActividadId:{
                        [Op.in]: req.body.ids
                    }
                }
            });
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