import { assert } from 'chai';

/**
 * params: takes in a string and an integer which represents the size
 * of the substrings we should seperate the oringal string into
 *
 * returns: a string that represents a transformation on the oringal string.
 * return an empty sting if the oringal string is empty or the interger param is
 * less than or equal to 0
 */
const revRot = (s: string, sz: number): string => {
    if (s.length === 0 || sz <= 0) return '';

    // seperate string into chunks and discard last chunk if size is less than sz
    // process each chunk to determine if it meets a certain constraint
    //   1. if it does reverse it
    //   2. else rotate it
    const segments: string[] = chunks(s, sz);
    if (segments.length > 0)
        return segments.reduce(
            (acc, curr) =>
                `${acc}${
                    constraint(curr)
                        ? curr.split('').reverse().join('')
                        : [...curr.split('').splice(1), curr[0]].join('')
                }`,
            ''
        );

    return '';
};

const constraint = (s: string): boolean => {
    const ss = s.split('');
    return ss.reduce((acc, curr) => acc + parseInt(curr) ** 3, 0) % 2 === 0;
};

const chunks = (s: string, sz: number): string[] => {
    const ss = s.split('');
    const cs: string[] = [];

    while (ss.length > 0) {
        const chunk = ss.splice(0, sz);
        if (chunk.length === sz) cs.push(chunk.join(''));
    }

    return cs;
};

// examples
const testing = (actual: string, expected: string): void => {
    assert.strictEqual(actual, expected);
};

describe('reverse or rotate', function () {
    it('Basic tests revrot', function () {
        testing(revRot('1234', 0), '');
        testing(revRot('', 0), '');
        testing(revRot('1234', 5), '');
        let s = '733049910872815764';
        testing(revRot(s, 5), '330479108928157');
    });
});

export default revRot;
