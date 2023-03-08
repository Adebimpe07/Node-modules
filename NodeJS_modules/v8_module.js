// To access information about V8 (the JavaScript engine)
//  module provides methods and properties for accessing information about the V8 engine, such as memory usage and heap statistics

const v8 = require('v8');

// Get heap statistics
const heapStats = v8.getHeapStatistics();

console.log(heapStats);
