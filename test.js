var DataSet = require("./index.js")

var test = require("tape")
var document = require("global/document")
var element = require("element")

test("can fetch records out of DS", function (assert) {
    var elem = document.body
    var ds = DataSet(elem)

    ds.foo = "bar"

    var ds2 = DataSet(elem)

    assert.equal(ds2.foo, "bar")

    assert.end()
})


test("can fetch pre existing records out of DOM", function (assert) {
    var elem = element("<div data-foo='bar' data-baz='oh yeah'></div>")

    var ds = DataSet(elem)
    assert.equal(ds.foo, "bar")
    assert.deepEqual(ds.baz, "oh yeah")

    assert.end()
})

test("setting dash names", function (assert) {
    var elem = document.createElement("div")
    DataSet(elem)["foo-bar"] = "baz"
    var elem2 = element("<div data-foo-bar='baz'></div>")

    var ds = DataSet(elem)
    var ds2 = DataSet(elem2)

    assert.equal(ds["foo-bar"], "baz")
    assert.equal(ds2["foo-bar"], "baz")

    assert.end()
})
