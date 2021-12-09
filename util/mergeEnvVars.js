const filename = `${__dirname}/../config/swagger.json`;
const file = require(filename);
const fs = require('fs');

module.exports = function () {
    console.log("filename", filename);
    if(file && file.info && file.info.title) {
        file.info.title = process.env.DOCUMENTATION_NAME;
        console.log(file.info.title, process.env.DOCUMENTATION_NAME)
    }
    console.log(JSON.stringify(file))

    // fs.writeFile(filename, JSON.stringify(file), function writeJSON(err) {
    //     if (err)
    //         return console.log(err);
    //     console.log('updated config.json');
    // });
    return file;
};