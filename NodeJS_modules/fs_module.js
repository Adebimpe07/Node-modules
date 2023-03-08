// This module provides an API for working with the file system in Node.js. 

const fs = require('fs');

// read a file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// write to a file
fs.writeFile('file.txt', 'Hello, world!', (err) => {
  if (err) throw err;
  console.log('File saved!');
});