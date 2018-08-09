const express = require('express');
const shim = require('@ffleet/shim');

const app = express();
app.use(express.static('./public'));
exports.static = shim.http(app);
