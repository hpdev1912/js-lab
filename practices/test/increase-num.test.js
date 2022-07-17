import { isIncreasingNumber, isIncreasingNumberV2 } from '../increase-num';

describe('isIncreasingNumber()', () => {
    test('should return false when n >= 1000000', () => {
        expect(isIncreasingNumber(1000000)).toBe(false);
    });
    test('should return false when number less than 10', () => {
        //tao mang tu 0 -> 10
        Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
            expect(isIncreasingNumber(x)).toBe(false);
        });
    });
    test('should return false when number is not increasing', () => {
        [11, 111, 2222, 33333, 444444, 321, 243, 5342].forEach((x) => {
            expect(isIncreasingNumber(x)).toBe(false);
        });
    });
    test('should return true when number is increasing', () => {
        expect(isIncreasingNumber(123)).toBe(true);
        expect(isIncreasingNumber(1234)).toBe(true);
        expect(isIncreasingNumber(56789)).toBe(true);
    });
});

describe('isIncreasingNumberV2()', () => {
    test('should return false when n >= 1000000', () => {
        expect(isIncreasingNumberV2(1000000)).toBe(false);
    });
    test('should return false when number less than 10', () => {
        //tao mang tu 0 -> 10
        Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
            expect(isIncreasingNumberV2(x)).toBe(false);
        });
    });
    test('should return false when number is not increasing', () => {
        [11, 111, 2222, 33333, 444444, 321, 243, 5342].forEach((x) => {
            expect(isIncreasingNumberV2(x)).toBe(false);
        });
    });
    test('should return true when number is increasing', () => {
        expect(isIncreasingNumberV2(123)).toBe(true);
        expect(isIncreasingNumberV2(1234)).toBe(true);
        expect(isIncreasingNumberV2(56789)).toBe(true);
    });
});
