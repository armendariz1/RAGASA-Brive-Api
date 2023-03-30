const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    return sequelize.define('Permisos',{
        PermisoId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Permiso:DataTypes.STRING,
        PermisoPapaId:DataTypes.INTEGER,
        Orden:DataTypes.INTEGER
    },{ timestamps: false });
} 