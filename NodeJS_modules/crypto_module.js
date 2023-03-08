// This module provides cryptographic functionality in Node.js
const crypto = require('crypto');

// generate a random string
const randomString = crypto.randomBytes(16).toString('hex');
console.log(randomString); // output: a29b28c4b4f354fa4d4a92c9e9ddc1e8
