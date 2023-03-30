'use strict'
const { HorarioSync } = require('../database/db.config');

const controller = {
    getAll: async (req,res) =>{
        try {
            const data = await HorarioSync.findAll({
                order:[
                    ['Orden','ASC']
                ]
            });
            if (data !== null) {
                res.status(200).send(data);
            } else {
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