const http = require("http");

//created a server. This server object is a event listener
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello avijit."); // write method will show the value at http://localhost:3005 port
        res.write("Hello yay."); // write method will show the value at http://localhost:3005 port
        res.end(); // must have to end the response always

    } else if (req.url === "/about") {
        res.write("Welcome to about page.");
        res.end();

    } else {
        res.write("Not found...");
        res.end();

    }

});



server.listen(3005); //Listening this server in 3004

console.log("Server is listening")