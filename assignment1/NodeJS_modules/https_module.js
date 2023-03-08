// The HTTPS module provides a way of making Node.js transfer data over HTTP TLS/SSL protocol, which is the secure HTTP protocol.
// Create a https server that listens on port 8080 of your computer.

// When port 8080 get accessed, write "Hello World!" back as a response:

var https = require('https');

https.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);