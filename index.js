'use-strict';
/*eslint-disable no-console*/
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const host = 'localhost';
const port = 3000;

const homepage = path.join(__dirname, 'index.html');

app.get('/', (req, res)=>res.sendFile(homepage));

app.listen(port, host,()=> console.log('Server running.'));
