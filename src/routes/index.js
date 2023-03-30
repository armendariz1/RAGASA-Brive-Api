'use strict'
const express = require("express");
const router = express.Router();
const fs = require('fs');
const messages = require('../helpers/messages');

const pathRouter = `${__dirname}`;

const removerExtension = (fileName) => {
    return fileName.split(".").shift();
}

const clearRouteName = (routeName) => {
    const uselessWords = ["routes", "route", "router"];
    let route = routeName
                    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
                    .toLowerCase()
                    .trim();

    // route = route.replace(' ', '');
    const expStr = uselessWords.join("|");
    const clearRoute = route.replace(new RegExp(`\\b(${expStr})\\b`, 'gi'), '').trim();
    
    let routeParts = clearRoute.split(' ');
    if(routeParts.length > 1){
        for(var i = 1; i < routeParts.length; i++){
            routeParts[i] = routeParts[i].substring(0,1).toUpperCase() + routeParts[i].substring(1, routeParts[i].length);
        }
    }
    let finalRoute = routeParts.join('');
    return finalRoute;
}

fs.readdirSync(pathRouter).filter(file => {
    const archivoSinExt = removerExtension(file); // le decimos que a cada archivo le quite la extensión y el resultado lo asignamos a la variable para luego validar que no esté en lista negra
    const blackListFiles = ['index'].includes(archivoSinExt); // verificamos que el archivo anterior no esté en la lista negra para poder ser utilizado
    if(!blackListFiles){
        const routeName = clearRouteName(archivoSinExt);
        router.use(`/${routeName}`, require(`./${archivoSinExt}`)); // cada archivo encontrado en la carpeta de rutas será tomado en cuenta de manera automática
    }
});

router.get('*', (req, res) => {
    messages.statusCode404(res);
});


module.exports = router