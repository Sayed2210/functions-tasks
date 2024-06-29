const findMin = (x : number, y: number) : number => {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(findMin(0, 10))
console.log(findMin(0, -10))