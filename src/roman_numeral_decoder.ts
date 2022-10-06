import { assert } from 'chai';

/**
 * @param roman
 * a string representing a roman numeral
 *
 * @returns number
 * represents the numercial value of the roman numeral string
 */
const solution = (roman: string): number => {
    // 1. place each roman numeral in a data structure that can store
    // the numeral and its numerical value.  An object or hash map would suffice
    // 2. Loop thru the input string and reference the value associated with each
    // numeral from the datastructure and add it to the previous numerical value
    // we can use array reduce to do this quickly
    // NB: we will read from the left since we need to subtract instead of add
    // numerals that are less than the numeral that preceded them.

    const romanNumerals: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let prevNumeral: number | null = null;
    return roman
        .split('')
        .reverse()
        .reduce((acc, curr) => {
            const total =
                romanNumerals[curr] >= (prevNumeral ?? 0)
                    ? acc + romanNumerals[curr]
                    : acc - romanNumerals[curr];
            prevNumeral = romanNumerals[curr];
            return total;
        }, 0);
};

// Example
describe('Roman Numeral Decoder', function () {
    it('tests', () => {
        assert.equal(solution('XXI'), 21);
        assert.equal(solution('I'), 1);
        assert.equal(solution('IV'), 4);
        assert.equal(solution('MMVIII'), 2008);
        assert.equal(solution('MDCLXVI'), 1666);
    });
});
