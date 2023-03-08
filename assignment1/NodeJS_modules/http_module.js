// This module provides an API for building HTTP servers and clients in Node.js

const http = require('http');

// create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!\n');
});

// start the server
server.listen(3000, () => {
  console.log('Server running on port 3000');
});