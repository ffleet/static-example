const express = require('express');
const shim = require('@ffleet/shim');

exports.static = shim.http(express.static('./public'));
