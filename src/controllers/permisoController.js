'use strict'
const { Permisos } = require('../database/db.config');
const { Op } = require('sequelize');

const controller = {
    getAllPermisos: async (req, res) => {
        try {
            const data = await Permisos.findAll();
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

    getById: async (req, res) => {
        try {
            const data = await Permisos.findAll(
                {
                    where: {
                        PermisoId: req.params.id
                    }
                }
            );

            if(data != null)
                res.status(200).send(data);
            else
                res.status(204);

        } catch (ex) {
            res.status(500).send({
                error: ex.message
            });
        }
    }
}

module.exports = controller;