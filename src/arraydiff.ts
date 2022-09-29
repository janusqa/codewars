const arrayDiff = (a: number[], b: number[]): number[] => {
    return a.filter((candidate) => !b.includes(candidate));
};

console.log(arrayDiff([1, 2], [1]));
