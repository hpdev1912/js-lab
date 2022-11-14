function validMountainArray(numberList) {
    // your code here
    if (!Array.isArray(numberList) || numberList.length < 3) return false;
    let max;
    for (let index = 1; index < numberList.length - 1; index++) {
        if (!max) {
            if (numberList[index] < numberList[index - 1]) {
                max = index - 1;
            } else if (numberList[index] === numberList[index - 1]) {
                return false;
            }
        } else if (numberList[index] >= numberList[index - 1]) {
            return false;
        }
    }
    return max > 0 && max < numberList.length - 1;
}
console.log(validMountainArray([1, 2, 3, 4, 2, 1]));
