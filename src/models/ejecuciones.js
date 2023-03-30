const { DataTypes } = require('sequelize');
module.exports = (sequelize) =>{
    return sequelize.define('Ejecuciones',{
        EjecucionId:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        EntidadId: DataTypes.INTEGER,
        TipoResultadoId: DataTypes.INTEGER,
        FechaEjecucion: DataTypes.DATE
    },{ timestamps: false });
}