const express = require('express');

const expressApp = express();

expressApp.use((res, req, next) => {
    req.setHeader('Access-Control-Allow-Origin', '*');
    req.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    req.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
});


module.exports(expressApp);