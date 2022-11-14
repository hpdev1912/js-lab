//P1 loop
export function countUniqueNumber(numberList) {
    if (!Array.isArray(numberList)) return -1;

    let uniqueNumList = [];

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        if (!uniqueNumList.includes(number)) uniqueNumList.push(number);
    }
    return uniqueNumList.length;
}

export function countUniqueNumberUseObject(numberList) {
    if (!Array.isArray(numberList)) return -1;

    const sortedArray = numberList.sort((a, b) => a - b);
    let flagObject = {};

    for (let i = 0; i < sortedArray.length; i++) {
        const number = numberList[i];
        //{1: true, 2:true} du co trung key thi no van true
        flagObject[number] = true;
    }

    return Object.keys(flagObject).length;
}
export function countUniqueNumberUseReduce(numberList) {
    if (!Array.isArray(numberList)) return -1;

    const uniqueNumList = numberList.reduce((flag, number) => {
        flag[number] = true;
        //luon nho phai return
        return flag;
    }, {});

    return Object.keys(uniqueNumList).length;
}
