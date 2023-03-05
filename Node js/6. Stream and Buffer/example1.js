const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output1.txt`)



//1st way to write a file
ourReadStream.on("data", (chunk) => {
    ourWriteStream.write(chunk)
})


//2nd way to write a file
ourReadStream.pipe(ourWriteStream);