'use strict'
const messages = {
    statusCode200: (res, data) => {
        if(data === null){
            data = {};
        }
        res.status(200);
        res.send({ 
            code: 200,
            msg: 'Petición exitosa',
            data,
        });
    },
    statusCode201: (res, data) => {
        res.status(201);
        res.send({ 
            code: 201,
            msg: 'Recurso creado correctamente',
            data,
        });
    },
    statusCode204: (res) => {
        res.status(204);
        res.send({ 
            code: 204,
            msg: 'La solicitud no retorno información',
            data: [],
        });
    },
    statusCode400: (res, data) => {
        if(data === null){
            data = {};
        }
        res.status(400);
        res.send({ 
            code: 400,
            msg: 'Solicicitud incorrecta',
            data
        });
    },
    statusCode401: (res) => {
        res.status(401);
        res.send({ 
            code: 401,
            msg: 'Usuario no autorizado',
            data: []
        });
    },
    statusCode403: (res) => {
        res.status(403);
        res.send({ 
            code: 403,
            msg: 'Permiso no autorizado',
            data: []
        });
    },
    statusCode404: (res) => {
        res.status(404);
        res.send({ 
            code: 404,
            msg: 'El servidor no pudo encontrar el recurso solicitado',
            data: []
        });
    },
    statusCode500: (res) => {
        res.status(500);
        res.send({ 
            code: 500,
            msg: 'Algo salió mal',
            data: []
        });
    }
};

module.exports = messages;