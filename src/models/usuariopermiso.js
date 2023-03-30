const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    return sequelize.define('UsuarioPermiso', {
        UsuarioID: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        PermisoId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, { timestamps: false })
};