//find-max
function findMax(arr) {
    if (!Array.isArray(arr)) throw new Error('Invalid input');
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }

    arr.forEach((num) => {
        if (num > max) max = num;
    });

    arr.reduce((max, num) => {
        if (num > max) return num;
        return max;
    });
    return max;
}
