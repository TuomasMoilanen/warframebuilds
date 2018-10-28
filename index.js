'use-strict';
/*eslint-disable no-console*/
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const host = 'localhost';
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, host,()=> console.log('Server running.'));
