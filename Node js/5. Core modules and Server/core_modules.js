const fs = require("fs");



// for create a new file...if file already exists then it'll be replaced
fs.writeFile('mynewfile1.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('File cerated / replaced!');
});


// for append with a specific file
fs.appendFile('mynewfile1.txt', ' And This is my new another text', function (err) {
    if (err) throw err;
    console.log('File updated!');
});


// for rename a specific file
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});


// for delete a specific file
fs.unlink('myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');

});



console.log("Hlw")