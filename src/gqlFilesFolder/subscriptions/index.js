const fs = require('fs');
const path = require('path');

module.exports.tick = fs.readFileSync(path.join(__dirname, 'tick.gql'), 'utf8');
