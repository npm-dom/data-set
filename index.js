'use strict';

var createHash = require('./create-hash.js');

var hashKey = '__DATA_SET_WEAK_KEY@4';

module.exports = DataSet;

function DataSet(elem) {
    var hash = elem[hashKey];

    if (!hash) {
        hash = elem[hashKey] = createHash(elem);
    }

    return hash;
}
