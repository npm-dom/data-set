var Weakmap = require("weakmap")
var Individual = require("individual")

var createHash = require("./create-hash.js")

var datasetMap = Individual("__DATA_SET_WEAKMAP", Weakmap())

module.exports = DataSet

function DataSet(elem) {
    var hash = datasetMap.get(elem)

    if (!hash) {
        hash = createHash(elem)
        datasetMap.set(elem, hash)
    }

    return hash
}
