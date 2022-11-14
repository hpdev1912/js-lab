export function findMostFrequentNumber(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
    const objectResult = {};
    let maxKey = undefined;
    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];

        objectResult[number] = objectResult[number] === undefined ? 1 : objectResult[number] + 1;

        if (maxKey === undefined || objectResult[number] > objectResult[maxKey]) {
            maxKey = number;
        }
    }
    // let maxKey = undefined;
    // for (const key in objectResult) {
    //     // if (objectResult[key] > max) {
    //     //     max = objectResult[key];
    //     //     result = key;
    //     // }
    //     if (maxKey === undefined || objectResult[key] > objectResult[maxKey]) {
    //         maxKey = key;
    //     }
    // }

    return Number(maxKey);
}

console.log(findMostFrequentNumber([1, 2, 1, 3, 4, 3, 4, 4]));
