// cluster module is a built-in module that allows you to create a cluster of Node.js processes to take advantage of multi-core systems. It provides a way to spawn child processes, each running on a separate CPU core, to handle incoming requests and spread the workload across the available cores

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case, it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}


//In this example, the "cluster" module is used to create worker processes that handle incoming HTTP requests. The "isMaster" property is used to determine whether the current process is the master process or a worker process.
// If it is the master process, it creates multiple worker processes using the "fork()" method. If a worker process dies, the master process will automatically create a new one. If it is a worker process, it starts an HTTP server and listens for incoming requests.