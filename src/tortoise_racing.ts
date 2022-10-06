import { assert } from 'chai';

const race = (v1: number, v2: number, g: number) => {
    if (v1 >= v2) return null;
    const seconds = (g / (v2 - v1)) * 3600;

    return [
        Math.floor(seconds / 3600),
        Math.floor(seconds / 60) % 60,
        Math.floor(seconds % 60),
    ];
};

const testing = (
    v1: number,
    v2: number,
    g: number,
    expected: number[] | null | void
) => {
    const act = race(v1, v2, g);
    assert.deepEqual(act, expected);
};

describe('Tortise racing', function () {
    it('Basic tests race', function () {
        testing(720, 850, 70, [0, 32, 18]);
        testing(80, 91, 37, [3, 21, 49]);
        testing(80, 100, 40, [2, 0, 0]);
        testing(720, 850, 37, [0, 17, 4]);
    });
});
