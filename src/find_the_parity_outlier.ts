import { assert } from 'chai';

/**
 * PARAMS: integer array with a length of AT LEAST 3 elements.
 * all elements are either odd or even execpt for ONE of them.
 *
 * RETURN: an integer, that one integer that is different from
 * all the others
 */
const findOutlier = (integers: number[]): number => {
    // determine the parity majority
    // a filter can do this
    const evenArray = integers.filter((integer) => integer % 2 === 0);

    // after discovering the parity then another filter can find the outlier
    return evenArray.length > 1
        ? integers.filter((integer) => integer % 2 !== 0)[0]
        : integers.filter((integer) => integer % 2 == 0)[0];
};

// EXAPLES:
describe('Find The Parity Outlier', function () {
    it('Simple tests', function () {
        assert.equal(findOutlier([0, 1, 2]), 1);
        assert.equal(findOutlier([1, 2, 3]), 2);
        assert.equal(findOutlier([2, 6, 8, 10, 3]), 3);
        assert.equal(findOutlier([0, 0, 3, 0, 0]), 3);
        assert.equal(findOutlier([1, 1, 0, 1, 1]), 0);
    });
});
