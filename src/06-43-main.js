//random number [0, n]
// min = 0
//range = n- 0 = n
function randomZeroToNum(number) {
    if (number < 0) return -1;
    const random = Math.random();
    return Math.round(number * random);
}

//random number [a,b] a < b
//min = a
//range = b-a
function randomRangeNum(number1, number2) {
    if (number1 >= number2) return -1;

    const range = Math.random();
    return Math.round((number2 - number1) * range) + number1;
}

console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
console.log(randomRangeNum(5, 10));
