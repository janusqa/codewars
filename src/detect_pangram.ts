import { assert } from 'chai';

const isPangram = (phrase: string): boolean =>
    new Set(
        phrase
            .toLowerCase()
            .split('')
            .filter(
                (char) =>
                    char !== ' ' &&
                    char.charCodeAt(0) >= 97 &&
                    char.charCodeAt(0) <= 122
            )
    ).size >= 26;

describe('isPangram', function () {
    it('test', function () {
        assert.strictEqual(
            isPangram('The quick brown fox jumps over the lazy dog.'),
            true
        );
        assert.strictEqual(isPangram('This is not a pangram.'), false);
    });
});

export default isPangram;
