export function findAllPositiveEvenSubArr(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    const resultArr = [];
    let subArr = [];
    for (let index = 0; index < numberList.length; index++) {
        const number = numberList[index];
        if (number % 2 === 0) subArr.push(number);
        if ((number % 2 !== 0 || index === numberList.length - 1) && subArr.length > 0) {
            resultArr.push(subArr);
            subArr = [];
        }
    }

    return resultArr;
}
