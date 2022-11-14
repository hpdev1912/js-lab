import { findStudentById, findStudentByIdFindIndex } from '../find-student-by-id';

const studentListMock = [
    { id: 1, name: 'abcd', age: 18 },
    { id: 2, name: 'abcde', age: 12 },
];
describe('Find student have id using findStudentById', () => {
    it('should return -1 when not have data', () => {
        expect(findStudentById({}, 3)).toBe(-1);
        expect(findStudentById([], 3)).toBe(-1);
    });
    it('should return -1 when not found student', () => {
        expect(findStudentById(studentListMock, 3)).toBe(-1);
    });

    it('should return student info when found student', () => {
        expect(findStudentById(studentListMock, 1)).toEqual({
            id: 1,
            name: 'abcd',
            age: 18,
        });
    });
});
describe('Find student have id using findStudentByIdFindIndex', () => {
    it('should return -1 when not have data', () => {
        expect(findStudentByIdFindIndex({}, 3)).toBe(-1);
        expect(findStudentByIdFindIndex([], 3)).toBe(-1);
    });
    it('should return -1 when not found student', () => {
        expect(findStudentByIdFindIndex(studentListMock, 3)).toBe(-1);
    });

    it('should return student info when found student', () => {
        expect(findStudentByIdFindIndex(studentListMock, 1)).toEqual({
            id: 1,
            name: 'abcd',
            age: 18,
        });
    });
});
