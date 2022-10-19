import { assert } from 'chai';

const pigIt = (a: string): string => {
    return a.replace(/\b(\w)(.*?)\b/g, '$2$1ay');
};

describe('pig latin', () => {
    it('test', () => {
        assert.strictEqual(
            pigIt('Pig latin is cool'),
            'igPay atinlay siay oolcay'
        );
        assert.strictEqual(
            pigIt('This is my string'),
            'hisTay siay ymay tringsay'
        );
    });
});
