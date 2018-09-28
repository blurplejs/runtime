#!/usr/bin/env node
const Runtime = require('./dist').default;

const configuration = require(process.cwd() + '/blurple')

var runtime = new Runtime();
runtime.start(configuration);
