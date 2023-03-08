// The Net module provides a way of creating TCP servers and TCP clients.

const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  // Set the encoding to UTF-8
  socket.setEncoding('utf8');

  // Handle data received from clients
  socket.on('data', (data) => {
    console.log(`Received data from client: ${data}`);
    
    // Echo back the data to the client
    socket.write(`You said: ${data}`);
  });

  // Handle connection closed
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start listening on port 8080
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});


// In this example, we first import the "net" module using the require function. We then create a TCP server using the net.createServer() method and provide a callback function that will be called each time a client connects to the server.