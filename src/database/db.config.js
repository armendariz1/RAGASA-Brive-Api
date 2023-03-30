const Sequelize = require('sequelize');
const tedious = require('tedious');
const UserModel = require('../models/user');
const PermisosModel = require('../models/permiso');
const UsuarioPermisoModel = require('../models/usuariopermiso');
const EntidadModel = require('../models/entidad');
const HorarioSyncModel = require('../models/horariosync');
const EntidadHorarioSyncModel = require('../models/entidadhorariosync');
const EjecucionesModel = require('../models/ejecuciones');
const OrigenesModel = require('../models/origenes');
const TipoResultadoEjecucionModel = require('../models/tiporesultado');
const EjecucionesActividadModel = require('../models/ejecucionesactividad');
const ActividadModel = require('../models/actividad');

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  date = this._applyTimezone(date, options);
  return date.format('YYYY-MM-DD HH:mm:ss');
};

const sequelize = new Sequelize(
    process.env.BD||"dbRagasa_Consiss", // Database
    process.env.USERNAME||"admin", // Username
    process.env.PASSWORD||"*Consiss$2021", // Password
    {
        host: process.env.HOST||"mssql-prod.c5zxdmjllybo.us-east-1.rds.amazonaws.com",
        dialect: 'mssql',
        define: {
            freezeTableName: true,
        }
    }
);

const User = UserModel(sequelize);
const Permisos = PermisosModel(sequelize);
const UsuarioPermiso = UsuarioPermisoModel(sequelize);
const Entidad = EntidadModel(sequelize);
const HorarioSync = HorarioSyncModel(sequelize);
const EntidadHorarioSync = EntidadHorarioSyncModel(sequelize);
const Ejecuciones = EjecucionesModel(sequelize);
const Origenes = OrigenesModel(sequelize);
const TipoResultadoEjecucion = TipoResultadoEjecucionModel(sequelize);
const EjecucionesActividad = EjecucionesActividadModel(sequelize);
const Actividad = ActividadModel(sequelize);

module.exports = {
    sequelize,
    User,
    Permisos,
    UsuarioPermiso,
    Entidad,
    HorarioSync,
    EntidadHorarioSync,
    Ejecuciones,
    Origenes,
    TipoResultadoEjecucion,
    EjecucionesActividad,
    Actividad
}