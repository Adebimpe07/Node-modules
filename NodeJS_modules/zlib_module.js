// 	To compress or decompress files

var zlib = require('zlib');
var fs = require('fs');

var gzip = zlib.createGzip();
var r = fs.createReadStream('../demofile.txt');
var w = fs.createWriteStream('./mygzipfile.txt.gz');
r.pipe(gzip).pipe(w);

// Compress a file (demofile.txt) into a gzip file (mygzipfile.txt.gz):