import { assert } from 'chai';

/**
 *
 * @param n
 * a non-negative interger
 *
 * @return
 * a numberr that represents the number of bits that are equal to 1 in
 * the binary representation of the input
 */
function countBits(n: number): number {
    return n
        .toString(2)
        .split('')
        .filter((bit) => bit === '1').length;
}

// Examples
describe('bit counting', function () {
    it('test', function () {
        assert.equal(countBits(0), 0);
        assert.equal(countBits(4), 1);
        assert.equal(countBits(7), 3);
        assert.equal(countBits(9), 2);
        assert.equal(countBits(10), 2);
    });
});
