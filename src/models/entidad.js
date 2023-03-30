const { DataTypes } = require('sequelize');
module.exports = (sequelize) =>{
    return sequelize.define('Entidad', {
        EntidadId:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre: DataTypes.STRING,
        Do: DataTypes.BOOLEAN,
        Lu: DataTypes.BOOLEAN,
        Ma: DataTypes.BOOLEAN,
        Mi: DataTypes.BOOLEAN,
        Ju: DataTypes.BOOLEAN,
        Vi: DataTypes.BOOLEAN,
        Sa: DataTypes.BOOLEAN,
        Activo: DataTypes.BOOLEAN,
        UserAudit: DataTypes.STRING,
        UserFecha: DataTypes.DATE,
        OrigenId: DataTypes.INTEGER
    }, { timestamps: false });
}