const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
    const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

    ourReadStream.pipe(res); //whole data will show on port 3000
});

server.listen(3000);

console.log('listening on port 3000');