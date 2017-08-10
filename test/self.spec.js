const assert = require('assert');
const sinon = require('sinon');
const Chance = require('chance');

const chance = new Chance();
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

    it('should be able to test a promise', (done) => {
        const result = chance.word();

        window.fetch = sinon.stub().returns(Promise.resolve(result));

        window.fetch().then((response) => {
            assert.equal(response, result);
            done();
        });
    });
});
