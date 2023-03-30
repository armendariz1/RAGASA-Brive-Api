const { DataTypes } = require('sequelize');
const Actividad = require('../models/actividad');
module.exports = (sequelize) =>{
    const ejecuciones = sequelize.define('EjecucionesActividad',{
        EjecucionActividadId:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        EjecucionId: DataTypes.INTEGER
        ,ActividadId: {
            type: DataTypes.INTEGER
        }
        ,RequestUrl: DataTypes.STRING
        ,RequestParametros: DataTypes.STRING
        ,RequestBody: DataTypes.STRING
        ,RequestEjecuta: DataTypes.DATE
        ,ResponseStatus: DataTypes.INTEGER
        ,ResponseBody: DataTypes.STRING
        ,ResponseTermina: DataTypes.DATE
        ,Mensaje: DataTypes.STRING
    },{ timestamps: false });

    return ejecuciones;
}