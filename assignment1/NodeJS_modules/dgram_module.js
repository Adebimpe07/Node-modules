// provides functionality for working with datagrams

const dgram = require('dgram');

// Create a UDP server
const server = dgram.createSocket('udp4');

// Bind the server to a port and IP address
const PORT = 3000;
const ADDRESS = '127.0.0.1';
server.bind(PORT, ADDRESS);

// Listen for datagrams and log the data received
server.on('message', (msg, rinfo) => {
  console.log(`Received datagram from ${rinfo.address}:${rinfo.port}: ${msg}`);
});

// Log a message when the server starts listening
server.on('listening', () => {
  const address = server.address();
  console.log(`UDP server listening on ${address.address}:${address.port}`);
});

// Log an error message if the server encounters an error
server.on('error', (err) => {
  console.error(`UDP server error:\n${err.stack}`);
});

// Close the server when the process is terminated
process.on('SIGINT', () => {
  server.close();
  console.log('UDP server closed');
});



// In this example, the code creates a UDP server using the dgram.createSocket() method, which creates a new datagram socket object. The udp4 parameter specifies that the socket will use IPv4 addressing. The server is then bound to a port and IP address using the server.bind() method.

//The server listens for datagrams using the server.on('message', ...) method, which is called whenever a datagram is received. The code logs the received data, as well as the IP address and port of the sender.

//The server also listens for the listening and error events, which are emitted when the server starts listening and encounters an error, respectively. The code logs messages for each of these events.

//Finally, the code sets up a signal handler for the SIGINT signal, which is emitted when the process is terminated. The handler closes the server using the server.close() method and logs a message.