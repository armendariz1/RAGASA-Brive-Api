const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    return sequelize.define('Usuario', {
        UsuarioId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre: DataTypes.STRING,
        Email:DataTypes.STRING,
        UltimoAcceso: DataTypes.DATE,
        UserAudit:DataTypes.STRING,
        UserFecha:DataTypes.DATE,
        Estatus: DataTypes.BOOLEAN,
        UserName: DataTypes.STRING
    }, { timestamps: false })
};