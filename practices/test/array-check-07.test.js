import { hasAlice, hasAliceFilter } from '../array-check-07';

const studentList = [
    { name: 'Alice', gender: 'male' },
    { name: 'Alice', gender: 'female' },
    { name: 'Alisa', gender: 'female' },
];
describe('hasAlice', () => {
    test('should return false when input is empty array', () => {
        expect(hasAlice([])).toBe(false);
        expect(hasAlice({})).toBe(false);
    });
    test('should return true when has a girl student name is Alice', () => {
        expect(hasAlice(studentList)).toBe(true);
    });

    test('should return false when has not a girl student name is Alice', () => {
        expect(hasAlice({ name: 'Alice', gender: 'male' })).toBe(false);
    });
});

describe('hasAliceFilter', () => {
    test('should return false when input is empty array', () => {
        expect(hasAliceFilter([])).toBe(false);
        expect(hasAliceFilter({})).toBe(false);
    });
    test('should return true when has a girl student name is Alice', () => {
        expect(hasAliceFilter(studentList)).toBe(true);
    });

    test('should return false when has not a girl student name is Alice', () => {
        expect(hasAliceFilter({ name: 'Alice', gender: 'male' })).toBe(false);
    });
});
