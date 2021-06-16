const assert = require('../helpers/assert.helper');
const pathingHelper = require('../helpers/pathing.helper');

describe('helpers', () => {
    it('should be able to use pathing helper', () => {
        const header = pathingHelper.getGetOptions('/', 8001);
        assert.equal(header.method, 'GET');
    });

    it('should be able to use assert helpers', () => {
        assert.contains('The big fox was there.', 'fox');
        assert.notContains('Octopi everywhere!', 'chameleon');
    });
});
