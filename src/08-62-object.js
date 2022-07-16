const student = {
    name: 'Easy frontend',
    age: 18,
};
function checkObjectEmpty(student) {
    if (Object.keys(student).length === 0) return true;
    return false;
}

function calcAvgMark(obj) {
    const totalKey = Object.keys(obj).length;
    let totalMark = 0;
    for (let key in obj) {
        totalMark = totalMark + obj[key];
    }
    return totalMark / totalKey;
}

console.log(calcAvgMark({ math: 10, english: 8 }));
