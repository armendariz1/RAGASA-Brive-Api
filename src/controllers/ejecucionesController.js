'use strict'
const {Ejecuciones} = require('../database/db.config');
const { sequelize } = require('../database/db.config');


const controller = {
    getAllView: async (req, res) =>{
        try {
            const data = await sequelize.query("execute dbo.SPGET_EJECUCIONES_WITH_FILTER :FilterOrigen,:FilterDestino,:FilterFechaStart,:FilterFechaEnd,:FilterResultado,:Skip,:Take",
            {
                replacements: {
                    "FilterOrigen":     req.body.FilterOrigen,
                    "FilterDestino":    req.body.FilterDestino,
                    "FilterFechaStart": req.body.FilterFechaStart,
                    "FilterFechaEnd":   req.body.FilterFechaEnd,
                    "FilterResultado":  req.body.FilterResultado,
                    "Skip":             req.body.Skip,
                    "Take":             req.body.Take
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
    },
    getAllView2: async (req, res) =>{
        try {
            const data = await sequelize.query("execute dbo.SPGET_EJECUCIONES_WITH_FILTER :FilterOrigen,:FilterEntidad,:FilterFechaStart,:FilterFechaEnd,:FilterResultado,:Skip,:Take",
            {
                replacements: {
                    "FilterOrigen":     req.body.FilterOrigen,
                    "FilterEntidad":    req.body.FilterEntidad,
                    "FilterFechaStart": req.body.FilterFechaStart,
                    "FilterFechaEnd":   req.body.FilterFechaEnd,
                    "FilterResultado":  req.body.FilterResultado,
                    "Skip":             req.body.Skip,
                    "Take":             req.body.Take
                }
            });
            if(data !== null) {
                const count = await sequelize.query("execute dbo.SPGET_COUNT_EJECUCIONES_WITH_FILTER :FilterOrigen,:FilterEntidad,:FilterFechaStart,:FilterFechaEnd,:FilterResultado",
                {
                    replacements: {
                        "FilterOrigen":     req.body.FilterOrigen,
                        "FilterEntidad":    req.body.FilterEntidad,
                        "FilterFechaStart": req.body.FilterFechaStart,
                        "FilterFechaEnd":   req.body.FilterFechaEnd,
                        "FilterResultado":  req.body.FilterResultado
                    }
                });
                res.status(200).send({rows:data,count:count});
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