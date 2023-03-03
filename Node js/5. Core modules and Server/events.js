const EventEmitter = require("events"); // "events" modules gives a class

const emitter = new EventEmitter(); // created our new object with EventEmitter class


// register a listener for bellRing event
emitter.on("bellRing", ({ period, text }) => {
    console.log(`${period} class time is ${text}.`);
})




// call/raise an event
// second parameter is value for the function listener func
emitter.emit("bellRing", {
    period: "English",
    text: "finished"
}); 