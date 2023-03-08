// The Timers module provides a way scheduling functions to be called later at a given time.
// Write "Hello" every 500 milliseconds:

var myInt = setInterval(function () {
    console.log("Hello");
}, 500);