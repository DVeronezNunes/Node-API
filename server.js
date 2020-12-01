'use strict'
//Imports of application
const http = require('http');
const debug = require('debug')('nodestr: server');
const express = require('express');

//express creation
const app = express();
const port = 3000;
app.set('port', port);

//Server creation
const server = http.createServer(app);
const router = express.Router();

//Route creation
let route = router.get('/', (req, res, next) => {
    //Response of the route
    res.status(200).send({
        title: 'Api do Diego',
        version: '0.0.0'
    });
});

//Added route to express
app.use('/', route)

//Making the server to listen on port 3000
server.listen(port);
console.log('API running on port' + port)