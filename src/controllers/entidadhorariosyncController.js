'use strict'
const { EntidadHorarioSync } = require('../database/db.config');

const controller = {
    getAllEntidadHorariosByEntidadId: async (req, res) => {
        try {
            const data = await EntidadHorarioSync.findAll(
                {
                    where: {
                        EntidadId: req.params.id
                    }
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

    saveAllEntidadHorarios: async (req, res) => {
        try {
            console.log(req.body)
            const data = EntidadHorarioSync.bulkCreate(req.body);

            if (data != null)
                res.status(200).send(data);
            else
                res.status(204);

        } catch (ex) {
            res.status(500).send({
                error: ex.message
            });
        }
    },

    deleteEntidadHorarios: async (req, res) => {
        try {
            const result = await EntidadHorarioSync.destroy(
                {
                    where: { EntidadId: req.params.id }
                }
            );

            if (result != null) {
                if (result > 0)
                    res.status(200).send({ message: `Se eliminaron ${result} valores` });
                else
                    res.status(200).send({ message: `No se encontraron datos para eliminar` })
            }
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