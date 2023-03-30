const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    return sequelize.define('EntidadHorarioSync', {
        EntidadId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        HorarioSyncId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    }, { timestamps: false })
};