'use strict'
const { Entidad } = require('../database/db.config');
const { sequelize } = require('../database/db.config');

const controller = {
    getAll: async (req, res) => {
        try {
            const data = await Entidad.findAll();
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
    },

    saveEntidad: async (req, res) => {
        try {
            console.log(req.body);
            const data = await Entidad.update(
                {
                    Lu: req.body.Lu,
                    Ma: req.body.Ma,
                    Mi: req.body.Mi,
                    Ju: req.body.Ju,
                    Vi: req.body.Vi,
                    Sa: req.body.Sa,
                    Do: req.body.Do,
                    UserAudit: req.body.UserAudit,
                    UserFecha: new Date()
                },
                {
                    where: { EntidadId: req.body.EntidadId }
                }
            )
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
    },

    getComboEntidades: async (req,res) =>{
        try {
            const data = await Entidad.findAll({
                attributes: ['EntidadId', 'Nombre']
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