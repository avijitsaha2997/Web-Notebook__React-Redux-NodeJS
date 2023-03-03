const EventEmitter = require("events"); //"events" modules gives a class



// marge all the EventEmitter class method in School class
class School extends EventEmitter {
    startPeriod() {

        // call/raise an event
        // second parameter is value for the function listener func

        this.emit("bellRing", {

            period: "English",
            text: "finished"

        })
    }
}

module.exports = School;



