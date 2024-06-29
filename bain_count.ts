const countBs = (str: string): number => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            count++;
        }
    }
    return count;
};

console.log(countBs("BBC"));

const countChar = (str: string, char: string): number => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
};

console.log(countChar("kakkerlak", "k"));