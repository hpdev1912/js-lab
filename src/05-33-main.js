//use flag
function isEvenPositiveNum3(num) {
    let isValid;
    if (num % 2 === 0 && num > 0) {
        isValid = true;
    } else {
        isValid = false;
    }
    return isValid;
}

//use flag optimize

function isEvenPositiveNum4(num) {
    let isValid = false;
    if (num % 2 === 0 && num > 0) {
        isValid = true;
    }
    return isValid;
}

//don't use flag
function isEvenPositiveNum1(num) {
    if (num % 2 === 0 && num > 0) {
        return true;
    }
    return false;
}

//shortest
function isEvenPositiveNum2(num) {
    return num % 2 === 0 && num > 0;
}
