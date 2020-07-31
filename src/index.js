'use strict';

const cInterface = require('./openssl-interface.js');
const jsInterface = require('./crypto-js-interface.js');

const express = require('express');
const PORT = 8080;

const app = express();

app.use((req, res, next) => {
    if (!(req.query && req.query.input)) {
        res.send("Invalid query string!");
    }

    next();
});

app.get('/js', (req, res) => {
    const input = req.query.input;
    const string = jsInterface.getMD5(input);
    res.send(string);
});

app.get('/c', (req, res) => {
    const input = req.query.input;
    const string = cInterface.getMD5(input);
    res.send(string);
});

app.listen(PORT);
