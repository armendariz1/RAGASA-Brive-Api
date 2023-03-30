const express = require('express');
const bodyParser = require("body-parser");
const router = require("./routes");
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

require('./database/db.config');

Sentry.init({
    // dsn: 'https://e1d68c69ed564525a95995f356017a07@o4504057143427072.ingest.sentry.io/4504131033825280',
    dsn: 'https://5b1bca60ecee4022807ccd267db62901@o4504057143427072.ingest.sentry.io/4504136242561024',
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Tracing.Integrations.Express({ app }),
    ],
    tracesSampleRate: 0.1,
});

app.use(Sentry.Handlers.requestHandler({
    user: false,
    ip: true,
    serverName: true,
    request: true
}));
app.use(Sentry.Handlers.tracingHandler());
// Configurar cabeceras y cors
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/', router); 

app.use(Sentry.Handlers.errorHandler({
    shouldHandleError(error){
        if(error.status !== 200 ||error.status !== 201 || error.status !== 204){
            return true;
        }
        return false;
    }
}));

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
});
app.listen(PORT,()=>{console.log(`server on port ${PORT} =  http://localhost:3000 `)});


module.exports = app;