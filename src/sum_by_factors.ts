import chai, { assert } from 'chai';

// const combinations = (
//     lst: number[],
//     start: number,
//     result: number[][],
//     memo: number[] = []
// ) => {
//     if (memo.length > 0) result.push([...memo]);

//     for (let i = start; i < lst.length; i++) {
//         memo.push(lst[i]);
//         combinations(lst, i + 1, result, memo);
//         memo.pop();
//     }
// };

const primeFactors = (n: number): number[] => {
    const factors = new Set<number>();
    n = Math.abs(n);
    let i = 2;

    while (i <= n) {
        if (n % i === 0) {
            factors.add(i);
            n /= i;
        } else {
            i++;
        }
    }
    return Array.from(factors);
};

const sumOfDivided = (lst: number[]): number[][] => {
    const finalList: number[][] = [];
    // Get list of prime factors for lst
    let primeList: number[] = [];
    lst.forEach((n) => primeList.push(...primeFactors(n)));
    primeList = Array.from(new Set(primeList)).sort((a, b) => a - b);

    for (let n of primeList) {
        let sum = 0;
        const listN = [n];
        for (let m of lst) {
            if (m % n === 0) sum = sum + m;
        }
        listN.push(sum);
        finalList.push(listN);
    }

    return finalList;
};

//console.log(sumOfDivided([15, 21, 24, 30, 45]));

chai.config.truncateThreshold = 0;

function testing(lst: number[], expected: number[][]) {
    assert.deepEqual(sumOfDivided(lst), expected);
}

describe('factors by sum', function () {
    it('Basic tests', function () {
        testing(
            [12, 15],
            [
                [2, 12],
                [3, 27],
                [5, 15],
            ]
        );
        testing(
            [15, 21, 24, 30, 45],
            [
                [2, 54],
                [3, 135],
                [5, 90],
                [7, 21],
            ]
        );
        testing(
            [15, 21, 24, 30, -45],
            [
                [2, 54],
                [3, 45],
                [5, 0],
                [7, 21],
            ]
        );
        testing(
            [107, 158, 204, 100, 118, 123, 126, 110, 116, 100],
            [
                [2, 1032],
                [3, 453],
                [5, 310],
                [7, 126],
                [11, 110],
                [17, 204],
                [29, 116],
                [41, 123],
                [59, 118],
                [79, 158],
                [107, 107],
            ]
        );
        testing(
            [-29804, -4209, -28265, -72769, -31744],
            [
                [2, -61548],
                [3, -4209],
                [5, -28265],
                [23, -4209],
                [31, -31744],
                [53, -72769],
                [61, -4209],
                [1373, -72769],
                [5653, -28265],
                [7451, -29804],
            ]
        );
        testing([], []);
        testing(
            [1070, 1580, 2040, 1000, 1180, 1230, 1260, 1100, 1160, 1000],
            [
                [2, 12620],
                [3, 4530],
                [5, 12620],
                [7, 1260],
                [11, 1100],
                [17, 2040],
                [29, 1160],
                [41, 1230],
                [59, 1180],
                [79, 1580],
                [107, 1070],
            ]
        );
        testing(
            [17, 34, 51, 68, 102],
            [
                [2, 204],
                [3, 153],
                [17, 272],
            ]
        );
        testing(
            [17, -17, 51, -51],
            [
                [3, 0],
                [17, 0],
            ]
        );
        testing(
            [173471],
            [
                [41, 173471],
                [4231, 173471],
            ]
        );
    });
});

export default sumOfDivided;
