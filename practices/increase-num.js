//extract each digit in number
export function isIncreasingNumber(n) {
    if (n < 10) return false;

    let remaining = n;
    let prevDigit = 10; //gia su so cuoi cung la 10 always > bat cu so 1 chu so nao

    //loop lay tung chu so trong 1 so
    while (remaining > 0) {
        const lastDigit = remaining % 10;
        if (lastDigit >= prevDigit) return false;
        //update prevDigit to lastiDigit when true
        prevDigit = lastDigit;
        //update condition
        remaining = Math.trunc(remaining / 10);
    }
    return true;
}

//convert to string and compare
export function isIncreasingNumberV2(n) {
    if (n < 10) return false;
    const numberString = n.toString();
    console.log(numberString[1]);
    for (let i = 1; i < numberString.length; i++) {
        if (numberString[i] <= numberString[i - 1]) return false;
    }
    return true;
}
isIncreasingNumberV2(12345);
