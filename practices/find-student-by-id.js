export function findStudentById(studentList, studentId) {
    if (!Array.isArray(studentList) || studentList.length === 0) return -1;
    const student = studentList.find((std) => {
        return std.id === studentId;
    });

    return student ? student : -1;
}

export function findStudentByIdFindIndex(studentList, studentId) {
    if (!Array.isArray(studentList) || studentList.length === 0) return -1;
    const studentIndex = studentList.findIndex((std) => {
        return std.id === studentId;
    });

    console.log(studentIndex);

    return studentIndex >= 0 ? studentList[studentIndex] : -1;
}
