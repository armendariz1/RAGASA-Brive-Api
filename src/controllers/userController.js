'use strict'
const { User } = require('../database/db.config');
const { sequelize } = require('../database/db.config');

const controller = {
    getAllUser: async (req, res) => {
        try {
            const data = await sequelize.query("SELECT * FROM [dbo].[Usuario]");//await User.findAll();
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
    getUser: async (req, res) => {
        try {
            const data = await User.findOne({
                where:{
                    UserName: req.params.id
                }
            })
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
    saveUser: async (req, res) => {
        console.log(req);
        try {
            let data = null;
            if (req.body.UsuarioId == 0){
                let exist = await User.count(
                    {
                        where: {
                            UserName: req.body.UserName
                        }
                    }
                );
                if(exist > 0)
                    {
                        res.status(200).send({codigo:3, data:req.body});
                    }
                else{
                    data = await User.create(
                        {
                            Nombre: req.body.Nombre,
                            Email: req.body.Email,
                            UltimoAcceso: new Date(),
                            UserAudit: req.body.UserAudit,
                            UserFecha: new Date(),
                            Estatus: req.body.Estatus,
                            UserName: req.body.UserName
                        }
                    );
                }
            }
            else{
                data = await User.update(
                    {
                        Nombre: req.body.Nombre,
                        Email: req.body.Correo,
                        Estatus: req.body.Estatus,
                        UserName: req.body.UserName,
                        UserAudit: req.body.UserAudit
                    },
                    {
                        where: {UsuarioId: req.body.UsuarioId}
                    }
                );
            }
                
            if (data !== null) {
                res.status(200).send({codigo:1, data:data});
            } else {
                res.status({codigo:2, data:data});
            }
        } catch (error) {
            res.status(500).send({
                error: error.message
            });
        }
    }
}

module.exports = controller;