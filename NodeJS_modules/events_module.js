// provides a way to handle and emit events

const EventEmitter = require('events');

// Create an instance of the EventEmitter class
const myEmitter = new EventEmitter();

// Register an event listener for the 'hello' event
myEmitter.on('hello', () => {
  console.log('Hello world!');
});

// Emit the 'hello' event
myEmitter.emit('hello');


// we create an instance of the EventEmitter class and register an event listener for the 'hello' event using the on() method. The event listener is a callback function that will be called when the 'hello' event is emitted.