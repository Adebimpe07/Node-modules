// Provides classes used by a text terminal

const tty = require('tty');

if (tty.isatty(process.stdin.fd)) {
  console.log('Input is coming from a terminal');
} else {
  console.log('Input is not coming from a terminal');
}

process.stdin.setRawMode(true);
process.stdin.on('data', (chunk) => {
  console.log(`Chunk received: ${chunk}`);
  if (chunk.toString() === 'q') {
    process.exit();
  }
});

// In this example, we check whether input is coming from a terminal using the tty.isatty() function. We then set the raw mode of the TTY using process.stdin.setRawMode() and listen for data events on process.stdin. 