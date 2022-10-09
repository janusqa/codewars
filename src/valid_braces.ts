import { assert } from 'chai';

/**
 * @param braces
 * a string of braces from which we must determine if all open braces have
 * a valid closing brace
 *
 * @return
 * return true if all braces have a valid closing brace and false otherwise
 */
const validBraces = (braces: string): boolean => {
    //define a map of what a valid closing brace is for each opening brace
    // use a stack to store valid opening braces.
    // push opening braces to the stack and pop it off when we get a valid closing brace
    // if the stack is empty when parsing the string is complete we then the order of
    // the braces is valid so we can return true
    const braceMap: { [key: string]: string } = {
        ']': '[',
        '}': '{',
        ')': '(',
    };

    return (
        braces
            .split('')
            .reduce(
                (acc, curr) =>
                    curr in braceMap && braceMap[curr] === acc[acc.length - 1]
                        ? acc.slice(0, acc.length - 1)
                        : `${acc}${curr}`,
                ''
            ).length === 0
    );
};

// Examples
describe('valid braces', function () {
    it('should handle basic tests', function () {
        assert.strictEqual(validBraces('()'), true);
        assert.strictEqual(validBraces('[(])'), false);
        assert.strictEqual(validBraces('(})'), false);
        assert.strictEqual(validBraces('}}]]))}])'), false);
    });
});
