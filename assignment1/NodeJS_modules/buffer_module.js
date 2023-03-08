//The Buffer module is used to handle binary data, such as images or network packets, in Node.js. It provides a way to store and manipulate raw binary data in memory, and convert it to various encoding formats.

const buf1 = Buffer.from('Hello World');
const buf2 = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);

console.log(buf1.toString('utf8')); // prints 'Hello World'
console.log(buf2.toString('utf8')); // prints 'Hello'
