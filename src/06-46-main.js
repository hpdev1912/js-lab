function convertHourToSeconds(hour) {
    if (hour <= 0) return 0;
    const hours = Math.trunc(hour) * 60;
    const minute = (hour - Math.floor(hour)) * 60;
    return 60 * (hours + minute);
}

console.log(convertHourToSeconds(1) + ' seconds');

//dung ki thuat linh canh
function findMaxNum(a, b, c) {
    let maxNum = a;
    if (maxNum <= b) {
        maxNum = b;
    } else if (maxNum <= c) {
        maxNum = c;
    }
    return maxNum;
}

function findMaxEvenNum(a, b, c) {
    let maxNum = -1;
    if (a % 2 === 0 && a > maxNum) {
        maxNum = a;
    }
    if (b % 2 === 0 && b > maxNum) {
        maxNum = b;
    }
    if (c % 2 === 0 && c > maxNum) {
        maxNum = c;
    }
    return maxNum;
}

console.log(findMaxEvenNum(2, 4, 1));
