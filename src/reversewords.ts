const reverseWords = (str: string): string => {
    return str
        .split(' ')
        .map((element) => element.split('').reverse().join(''))
        .join(' ');
};
