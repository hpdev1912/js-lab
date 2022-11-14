import { findMostFrequentNumber } from '../find-most-prequent-num';

describe('findMostFrequentNumber(numberList)', () => {
    it('should return 0 when have incorrect input', () => {
        expect(findMostFrequentNumber('')).toBeUndefined();
        expect(findMostFrequentNumber(1)).toBeUndefined();
    });
    it('should return 0 when array empty', () => {
        expect(findMostFrequentNumber([])).toBeUndefined();
    });
    it('should return number max frequent', () => {
        expect(findMostFrequentNumber([1, 2, 1, 3, 4])).toBe(1);
        expect(findMostFrequentNumber([1, 2, 1, 3, 4, 3, 4, 4])).toBe(4);
    });
});
