//  provides a way to spawn child processes or execute shell commands from within a Node.js application. It allows you to create and interact with child processes in a way that is similar to how you would interact with a command-line shell.

const { spawn } = require('child_process');

const child = spawn('ls', ['-lh', '/usr']);

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

//In the above example, spawn is used to spawn a child process that executes the ls command with the -lh and /usr arguments. The stdout and stderr properties of the child process are used to capture the output and error output of the command, respectively. The on method is used to listen for events, such as the close event, which is emitted when the child process exits.