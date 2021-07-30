const fs = require('fs');
const path = require('path');

const dirName = require('../util/path');

const p = path.join(dirName, 'data', 'teams.json');

const getProductsFromFile = (cb) => {
    return fs.readFile(p, (err, data) => {
        if (err) {
            return cb([]);
        }

        return cb(JSON.parse(data));
    });
};

module.exports = getProductsFromFile;
