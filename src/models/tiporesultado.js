const { DataTypes } = require('sequelize');
module.exports = (sequelize) =>{
    return sequelize.define('TipoResultadoEjecucion',{
        TipoResultadoId:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        Descripcion: DataTypes.STRING,
        Icon: DataTypes.STRING
    },{ timestamps: false });
}