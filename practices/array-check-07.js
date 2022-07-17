function isAlice(student) {
    return student['name'].toLowerCase() === 'alice' && student['gender'] === 'female';
}

export function hasAliceForEach(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return false;
    //forEach khong break dc giua chung nhu for...i :)) nen phai dat flag neu muon dung no
    let hasAlice = false;
    studentList.forEach((student) => {
        if (isAlice(student)) hasAlice = true;
    });
    return hasAlice;
}
//TH chi can check co hay k thi recommend dung findIndex
export function hasAlice(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return false;

    // const hasAlice = studentList.findIndex((student) => {
    //     return isAlice(student);
    // });
    // return hasAlice !== -1 ? true : false;
    return studentList.findIndex(isAlice) >= 0;
}

export function hasAliceFilter(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return false;

    // const hasAlice = studentList.filter((student) => {
    //     return isAlice(student);
    // });
    // return hasAlice.length > 0 ? true : false;

    return studentList.filter(isAlice).length > 0;
}

function hasAliceFind(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return false;

    return Boolean(studentList.find((student) => isAlice(student)));
}
