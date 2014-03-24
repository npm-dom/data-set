var test = require("tape")
var h = require("hyperscript")
var document = require("global/document")
var element = require("element")

var DataSet = require("./index.js")

test("can fetch records out of DS", function (assert) {
    var elem = document.body
    var ds = DataSet(elem)

    ds.foo = "bar"

    var ds2 = DataSet(elem)

    assert.equal(ds2.foo, "bar")

    assert.end()
})

test("can fetch pre existing records out of other DS", function (assert) {
    var elem = h("div", {
        "data-foo": "bar",
        "data-baz": { "foobaz": "oh yeah" }
    })

    var ds = DataSet(elem)
    assert.equal(ds.foo, "bar")
    assert.deepEqual(ds.baz, { "foobaz": "oh yeah" })

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
    var elem = h("div", {
        "data-foo-bar": "baz"
    })
    var elem2 = element("<div data-foo-bar='baz'></div>")

    var ds = DataSet(elem)
    var ds2 = DataSet(elem2)

    assert.equal(ds["foo-bar"], "baz")
    assert.equal(ds2["foo-bar"], "baz")

    assert.end()
})
