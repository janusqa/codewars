import { assert } from 'chai';

const likes = (a: string[]): string => {
    const persons =
        a.length < 1
            ? 'no one'
            : a.length < 2
            ? a[0]
            : a.length < 3
            ? `${a[0]} and ${a[1]}`
            : a.length < 4
            ? `${a[0]}, ${a[1]} and ${a[2]}`
            : `${a[0]}, ${a[1]} and ${a.length - 2} others`;

    return `${persons} like${a.length < 2 ? 's' : ''} this`;
};

describe('Who likes it', function () {
    it('should return correct text', function () {
        assert.equal(likes([]), 'no one likes this');
        assert.equal(likes(['Peter']), 'Peter likes this');
        assert.equal(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
        assert.equal(
            likes(['Max', 'John', 'Mark']),
            'Max, John and Mark like this'
        );
        assert.equal(
            likes(['Alex', 'Jacob', 'Mark', 'Max']),
            'Alex, Jacob and 2 others like this'
        );
    });
});

export default likes;
