export function sumS(n) {
    if (n < 0) return -1;
    if (n === 0) return 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
