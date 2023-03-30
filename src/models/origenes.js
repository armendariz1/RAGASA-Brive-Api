const { DataTypes } = require('sequelize');
module.exports = (sequelize) =>{
    return sequelize.define('Origenes',{
        OrigenId:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        Origen: DataTypes.STRING,
        OrigenIcon: DataTypes.STRING,
        Destino: DataTypes.STRING,
        DestinoIcon: DataTypes.STRING
    },{ timestamps: false });
}