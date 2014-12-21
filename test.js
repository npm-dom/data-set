'use strict';

var DataSet = require('./index.js');

var test = require('tape');
var document = require('global/document');

test('can fetch records out of DS', function t(assert) {
    var elem = document.body;
    var ds = DataSet(elem);

    ds.foo = 'bar';

    var ds2 = DataSet(elem);

    assert.equal(ds2.foo, 'bar');

    assert.end();
});

test('can fetch pre existing records out of DOM', function t(assert) {
    var elem = document.createElement('div');
    elem.setAttribute('data-foo', 'bar');
    elem.setAttribute('data-baz', 'oh yeah');

    var ds = DataSet(elem);
    assert.equal(ds.foo, 'bar');
    assert.deepEqual(ds.baz, 'oh yeah');

    assert.end();
});

test('setting dash names', function t(assert) {
    var elem = document.createElement('div');
    DataSet(elem)['foo-bar'] = 'baz';
    var elem2 = document.createElement('div');
    elem2.setAttribute('data-foo-bar', 'baz');

    var ds = DataSet(elem);
    var ds2 = DataSet(elem2);

    assert.equal(ds['foo-bar'], 'baz');
    assert.equal(ds2['foo-bar'], 'baz');

    assert.end();
});
