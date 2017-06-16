const path = require('path');
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const opn = require('opn');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = http.createServer(app);

server.listen({host: 'localhost', port: 8080}, () => {
  console.log('Server:', server.address());
});
