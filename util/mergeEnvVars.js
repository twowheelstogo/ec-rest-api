const filename = `${__dirname}/../config/swagger.json`;
const file = require(filename);
const fs = require('fs');

module.exports = function (filename) {
    console.log("filename", filename);
    if(file.arguments && file.arguments.info && file.arguments.info.title) {
        file.arguments.info.title = process.env.DOCUMENTATION_NAME;
    }

    fs.writeFile(filename, JSON.stringify(file, null, 2), function writeJSON(err) {
        if (err)
            return console.log(err);
        console.log('updated config.json');
    });
};