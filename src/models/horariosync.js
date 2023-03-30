const { DataTypes, INTEGER } = require('sequelize');
module.exports = (sequelize) =>{
    return sequelize.define('HorarioSync',{
        HorarioSyncId:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Horario: DataTypes.STRING,
        HorarioValue: DataTypes.STRING,
        Orden: INTEGER
    },{ timestamps: false });
}