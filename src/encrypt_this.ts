import { assert } from 'chai';

/**
 * @param str
 * @returns str
 */
const encryptThis = (str: string): string => {
    // split string into arrary of words
    // map thru each word
    // split each word into an array of chars
    // convert the first char to its ascii value and swap the second and last char which each other
    // join the char array back together,
    // join the word array back together
    return str.length < 1
        ? ''
        : str
              .split(' ')
              .map((word) => encrypt(word))
              .join(' ');
};

const encrypt = (str: string): string => {
    const ss = str.split('');
    ss[0] = ss[0].charCodeAt(0).toString();
    if (ss.length > 2) [ss[1], ss[ss.length - 1]] = [ss[ss.length - 1], ss[1]];
    return ss.join('');
};

// Example
describe('Encrypt this', function () {
    it('should work with fixed tests', function () {
        assert.strictEqual(encryptThis(''), '');
        assert.strictEqual(encryptThis('A'), '65');
        assert.strictEqual(
            encryptThis('A wise old owl lived in an oak'),
            '65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
        );
        assert.strictEqual(
            encryptThis('The more he saw the less he spoke'),
            '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'
        );
        assert.strictEqual(
            encryptThis('The less he spoke the more he heard'),
            '84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare'
        );
        assert.strictEqual(
            encryptThis('Why can we not all be like that wise old bird'),
            '87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri'
        );
        assert.strictEqual(
            encryptThis('Thank you Piotr for all your help'),
            '84kanh 121uo 80roti 102ro 97ll 121ruo 104ple'
        );
    });
});

export default encryptThis;
