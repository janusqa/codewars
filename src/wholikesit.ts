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

console.log(likes([]));
console.log(likes(['Peter']));
console.log(likes(['Jacob', 'Alex']));
console.log(likes(['Max', 'John', 'Mark']));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
