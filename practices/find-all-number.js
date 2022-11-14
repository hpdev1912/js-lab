export function findAllNumbers(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];

    return numberList.filter((num) => {
        const positiveNum = Math.abs(num);
        const stringNum = positiveNum.toString();

        if (parseInt(stringNum[0]) % 2 !== 0) return parseInt(positiveNum);
    });
}
