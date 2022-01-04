const assert = require('assert');

/* eslint-disable prefer-object-spread */
module.exports = Object.assign({
    contains(parent, child) {
        assert.equal((-1 < String(parent).indexOf(child)), true);
    },
    notContains(parent, child) {
        assert.equal((-1 < String(parent).indexOf(child)), false);
    }
}, assert);
