const arrayDiff = (a: number[], b: number[]): number[] => {
    return a.filter((candidate) => !b.includes(candidate));
};

export default arrayDiff;
