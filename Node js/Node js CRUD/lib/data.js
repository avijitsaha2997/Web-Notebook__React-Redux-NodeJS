const path = require("path");
const fs = require("fs");
// const { stringify } = require("querystring");


const lib = {};

lib.basedir = path.join(__dirname, "/../.data/")


//creating a file/if the file already exists then it will show error
lib.create = function (dir, file, data, callback) {
    fs.open(lib.basedir + dir + "/" + file + ".json", "wx", (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringData = JSON.stringify(data);

            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback("Filc closing error")
                        }
                    })
                } else {
                    callback("Error writing the file.")
                }
            });
        } else {
            callback("Error found for creating file.")
        }
    })
}

//reading a existing file
lib.read = (dir, file, callback) => {
    fs.readFile(lib.basedir + dir + "/" + file + ".json", "utf-8", (err, res) => {
        callback(err, res);
    })
}

//updating a exsiting file
lib.update = function (dir, file, data, callback) {
    fs.open(lib.basedir + dir + "/" + file + ".json", "r+", (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringData = JSON.stringify(data);

            fs.ftruncate(fileDescriptor, (err2) => {
                if (!err2) {
                    fs.writeFile(fileDescriptor, stringData, (err3) => {
                        if (!err3) {
                            fs.close(fileDescriptor, (err4) => {
                                if (!err4) {
                                    callback(false);
                                } else {
                                    callback("File closing error")
                                }
                            })
                        } else {
                            callback("Error writing the file.")
                        }
                    });

                } else {
                    callback("Error truncate file.")
                }
            });
        } else {
            callback("Error updating file may not exists.")
        }
    })
}

lib.delete = (dir, file, callback) => {
    fs.unlink(lib.basedir + dir + "/" + file + ".json", (err) => {
        if (!err) {
            callback(false);
        } else {
            callback("error deleting")
        }
    })
}


module.exports = lib;