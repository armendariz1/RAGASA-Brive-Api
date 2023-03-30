'use strict'
const { UsuarioPermiso } = require('../database/db.config');

const controller = {
    getAllPermisosByUsuarioId: async (req, res) => {
        try {
            const data = await UsuarioPermiso.findAll(
                {
                    where: {
                        UsuarioID: req.params.id
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

    savePermisosUsuario: async (req, res) => {
        try {
            const data = UsuarioPermiso.create({
                UsuarioID: req.body.usuarioId,
                PermisoId: req.body.permisoId
            });

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

    saveAllPermisosUsuario: async (req, res) => {
        try {
            console.log(req.body);
            const data = UsuarioPermiso.bulkCreate(req.body);

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

    deletePermisosUsuario: async (req, res) => {
        try {
            const result = await UsuarioPermiso.destroy(
                {
                    where: { UsuarioID: req.params.id }
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