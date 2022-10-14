import { expect } from 'chai';

export const josephus = (items: any[], k: number): any[] => {
    const result: any[] = [];
    let start = 0;

    while (items.length > 0) {
        result.push(...items.splice((start + (k - 1)) % items.length, 1));
        start += k - 1;
    }

    return result;
};

describe('josephus permutation', function () {
    it('tests', function () {
        expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).to.eql([
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        ]);
        // expect(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)).to.eql([
        //     2, 4, 6, 8, 10, 3, 7, 1, 9, 5,
        // ]);
        // expect(josephus(['C', 'o', 'd', 'e', 'W', 'a', 'r', 's'], 4)).to.eql([
        //     'e',
        //     's',
        //     'W',
        //     'o',
        //     'C',
        //     'd',
        //     'r',
        //     'a',
        // ]);
        expect(josephus([1, 2, 3, 4, 5, 6, 7], 3)).to.eql([
            3, 6, 2, 7, 5, 1, 4,
        ]);
        expect(josephus([], 3)).to.eql([]);
    });
});

export default josephus;
