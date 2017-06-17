const http = require('http');

const app = require('./app/app.jsx');

const server = http.createServer(app);

server.listen({host: 'localhost', port: 8080}, () => {
  console.log('Server:', server.address());
});
