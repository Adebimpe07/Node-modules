// The Stream module provides a way of handling streaming data.

// There are two types of streams: readable and writeable.

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);