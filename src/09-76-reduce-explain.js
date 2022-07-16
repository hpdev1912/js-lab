//reduce(arr, callbackFn, initialValue)
function reduce(arr, callbackFn, initialValue) {
    if (!Array.isArray(arr) && typeof callBackFn !== 'function') {
        throw new Error('Invalid parameter!');
    }
    if (arr.length === 0) {
        if (initialValue === undefined) {
            throw new Error('Much have initialValue');
        }
    }
    const hasInitialValue = initialValue !== undefined;
    const startIndex = hasInitialValue ? 1 : 0;
    let accumulator = hasInitialValue ? initialValue : arr[0];
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callBackFn(accumulator, arr[i], i);
    }
    return accumulator;
}

function callBackFn(accumulator, currentValue, currentIndex) {
    return accumulator + currentValue;
}

console.log(reduce([], callBackFn));
