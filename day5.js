// EVENT
// Use EventEmitter class in which we have to use emit() and on()
// Program 1 and 2
// emit() - to trigger an event
// on() - to listen for an event
// once() - event will trigger only one time

// const EventEmitter = require("events");

// const event = new EventEmitter();

// event.on("greet", () => {
//     console.log("This is event emitter");
// });

// event.once("greet", () => {
//     console.log("Event triggered only one time");
// });

// event.emit("greet");
// event.emit("greet");
// event.emit("greet");
// event.emit("greet");
// event.emit("greet");
// event.emit("greet");

// Program 1: Create custom EventEmitter that triggers "greet" or "exit"

const EventEmitter = require("events");

const event = new EventEmitter();

// Create greet event
event.on("greet", () => {
    .log("Hello! This is greet event");
});

// Create exit event
event.on("exit", () => {
    console.log("Program is exiting...");
});
// Trigger events
event.emit("greet");console
event.emit("exit");