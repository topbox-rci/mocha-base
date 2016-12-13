const assert = require('assert');
const sinon = require('sinon');

const selfTest = {
    callback() {
        return true;
    }
};

describe('self', () => {
    it('should be able to assert', () => {
        assert.equal(true, true);
        assert.notEqual(false, true);
    });

    it('should be able to spy with sinon', () => {
        const callback = sinon.spy(selfTest, 'callback');

        selfTest.callback();

        assert.equal(callback.called, true);
    });
});
