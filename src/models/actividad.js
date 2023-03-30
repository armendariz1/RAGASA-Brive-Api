const { DataTypes } = require('sequelize');
const ejecucionesactividad = require('./ejecucionesactividad');
module.exports = (sequelize) =>{
    const actividad =  sequelize.define('Actividad',{
        ActividadId:{
            type: DataTypes.INTEGER,
            primaryKey:true
            // autoIncrement:true
        },
        Actividad: DataTypes.STRING
        ,Entidad: DataTypes.INTEGER
        ,UsaApi: DataTypes.BOOLEAN
    },{ timestamps: false });

    return actividad;
}