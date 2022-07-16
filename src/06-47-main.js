function getHundreds(num) {
    if (num < 100 || num >= 1000) return -1;
    return Math.trunc(num / 100);
}

function getTens(num) {
    if (num < 100 || num >= 1000) return -1;
    return Math.trunc((num % 100) / 10);
}

function getOnes(num) {
    return num % 10;
}

function sumAllDigits(num) {
    if (num < 100 || num >= 1000) return -1;
    return getHundreds(num) + getTens(num) + getOnes(num);
}
console.log(sumAllDigits(120));
