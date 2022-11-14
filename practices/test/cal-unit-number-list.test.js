import {
    countUniqueNumber,
    countUniqueNumberUseObject,
    countUniqueNumberUseReduce,
} from '../cal-unit-number-list';

describe('countUniqueNumber(numberList)', () => {
    it('should return -1 when not have correct input', () => {
        expect(countUniqueNumber(1)).toBe(-1);
        expect(countUniqueNumber('')).toBe(-1);
        expect(countUniqueNumber('asadsd')).toBe(-1);
        expect(countUniqueNumber(null)).toBe(-1);
    });
    it('should return 0 when not have unique number', () => {
        expect(countUniqueNumber([])).toBe(0);
    });
    it('should return correct number of unique number', () => {
        expect(countUniqueNumber([1, 1, 2, 2])).toBe(2);
        expect(countUniqueNumber([1, 1, 2, 2, 2, 12, 12, 33, 33])).toBe(4);
    });
});

describe('countUniqueNumberUseObject(numberList)', () => {
    it('should return -1 when not have correct input', () => {
        expect(countUniqueNumberUseObject(1)).toBe(-1);
        expect(countUniqueNumberUseObject('')).toBe(-1);
        expect(countUniqueNumberUseObject('asadsd')).toBe(-1);
        expect(countUniqueNumberUseObject(null)).toBe(-1);
    });
    it('should return 0 when not have unique number', () => {
        expect(countUniqueNumberUseObject([])).toBe(0);
    });
    it('should return correct number of unique number', () => {
        expect(countUniqueNumberUseObject([1, 1, 2, 2])).toBe(2);
        expect(countUniqueNumberUseObject([1, 1, 2, 2, 2, 12, 12, 33, 33])).toBe(4);
    });
    it('should return correct number of unique number', () => {
        expect(countUniqueNumberUseReduce([1, 1, 2, 2])).toBe(2);
        expect(countUniqueNumberUseReduce([1, 1, 2, 2, 2, 12, 12, 33, 33])).toBe(4);
    });
});
