import { assert } from 'chai';

const isIsogram = (str: string): boolean => {
    interface hashmap {
        [key: string]: number;
    }
    const isogram: hashmap = {};

    for (let char of str) {
        char = char.toLowerCase();
        isogram[char] = isogram[char] ? isogram[char] + 1 : 1;
        if (isogram[char] > 1) return false;
    }

    return true;
};

// const isIsogram = (str: string): boolean => {
//     return Array.from(new Set(str.toLowerCase())).length === str.length;
// };

describe('isograms', function () {
    it('test', function () {
        assert.equal(isIsogram('Dermatoglyphics'), true);
        assert.equal(isIsogram('isogram'), true);
        assert.equal(isIsogram('aba'), false, 'same chars may not be adjacent');
        assert.equal(
            isIsogram('moOse'),
            false,
            'same chars may not be same case'
        );
        assert.equal(isIsogram('isIsogram'), false);
        assert.equal(isIsogram(''), true, 'an empty string is a valid isogram');
    });
});
