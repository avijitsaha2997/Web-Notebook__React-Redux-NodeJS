const School = require("./main_event");

const school = new School(); // school object create from School class



// register a listener for bellRing event
school.on("bellRing", ({ period, text }) => {
    console.log(`${period} class time is ${text}.`);
})

// caling the class method
school.startPeriod();





//<---------------NOTE----------------->
// we have to register the listener with same object and call from the same object