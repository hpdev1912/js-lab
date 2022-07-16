//find(callbackFn)
//find(x => x>0)
function find(arr, callbackFn) {
    if (!Array.isArray(arr)) return -1;

    for (let i = 0; i < arr.length; i++) {
        if (checkPositiveNum(arr[i])) return arr[i];
    }
    return -1;
}

function checkPositiveNum(num) {
    if (num <= 0) return false;

    if (num > 0) return true;
}

const arrTest = [0, 0, 0];

console.log(find(arrTest, checkPositiveNum));
