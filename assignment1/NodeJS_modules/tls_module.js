// The TLS module provides a way of implementing TLS (Transport Layer Security) and SSL (Secure Socket Layer).

// module provides an API for creating secure TLS/SSL client and server connections. TLS (Transport Layer Security) is a protocol that provides encryption and authentication for network communications.


const tls = require('tls');
const fs = require('fs');

const options = {
  key: fs.readFileSync('path/to/server.key'),
  cert: fs.readFileSync('path/to/server.cert'),
};

const server = tls.createServer(options, (socket) => {
  console.log('Client connected');
  socket.write('Welcome to the secure server!');
  socket.pipe(socket);
});

server.listen(8000, () => {
  console.log('Secure server running on port 8000');
});

// In the above example, the imported the tls module and the fs module  provides access to the file system.