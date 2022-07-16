// using for...i
// using Array.from()
function createArrayInRangeV2(a, b) {
    // your code here
    if (a <= -100 || a > b || b >= 100) return [];
    const range = Array.from({ length: b - a + 1 }, (v, i) => a + i);
    return range;
}

//Liet ke uoc so cua mot so nguyen duong

// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
    // your code here
    const arr = Array.from({ length: n - 1 + 1 }, (v, i) => 1 + i);
    return arr.filter((x) => {
        if (n % x === 0) return x;
    });
}

// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
    // your code here
    const result = [];
    Array.from({ length: Math.trunc(Math.sqrt(n)) }, (x, i) => i + 1).forEach((x) => {
        if (n % x === 0) {
            result.push(x);
            if (x * x !== n) result.push(n / x);
        }
    });
    return result.sort((a, b) => a - b);
}

console.log(getDivisorListV2(1));

function checkPrime(n) {
    if (n < 2 || n >= 1000) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
//  for...i
function hasPrimeV1(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    for (let i = 0; i < numberList.length; i++) {
        console.log(checkPrime(numberList[i]));
        if (checkPrime(numberList[i])) return false;
    }
    return true;
}

const arr = [0, 2];

console.log(hasPrimeV1(arr));

function isPerfectNumber(n) {
    // your code here
    let sum = 0;
    for (let i = 1; i <= Math.trunc(n / 2); i++) {
        if (n % i === 0) sum += i;
    }
    return sum === n;
}
function isAllPerfectNumbersV2(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    const unPerfectNum = numberList.reduce((prevNum, currentNum) => {
        if (!isPerfectNumber(currentNum)) return currentNum;
    });
    return unPerfectNum.length === 0;
}
const createArrayInRangeV2 = [0, 6];

console.log(isAllPerfectNumbersV2(createArrayInRangeV2));

function calcAvgOfAllEvenNumbers(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length === 0) return 0;
    let evenNumTotal = 0;
    let count = 0;
    let evenNumCount = numberList.reduce((total, currentNum) => {
        if (currentNum % 2 === 0) {
            evenNumTotal += currentNum;
            return (count += 1);
        }
    }, 0);
    return evenNumCount > 0 ? Math.round(evenNumTotal / evenNumCount) : 0;
}

console.log(calcAvgOfAllEvenNumbers([1, 2, 4]));
