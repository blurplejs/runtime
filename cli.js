#!/usr/bin/env node
const Runtime = require('./dist').default;

var runtime = new Runtime();
runtime.start();
