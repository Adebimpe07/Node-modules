const path = require('path');

// join two file paths
const filePath = path.join(__dirname, 'file.txt');
console.log(filePath); // output: /path/to/file.txt

// get the extension of a file path
const extension = path.extname(filePath);
console.log(extension); // output: .txt
