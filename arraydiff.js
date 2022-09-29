function arrayDiff(a, b) {
    const filtered = [];
    for (const candidate of a) {
        if (b.indexOf(candidate) < 0) filtered.push(candidate);
    }

    return filtered;
}

console.log(arrayDiff([1, 2], [1]));
