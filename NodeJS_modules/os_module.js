//This module provides utilities for working with the operating system in Node.js

const os = require('os');

// get the current user's home directory
const homeDir = os.homedir();
console.log(homeDir); // output: /Users/username

// get the number of CPU cores
const numCores = os.cpus().length;
console.log(numCores); // output: 8 (example value)
