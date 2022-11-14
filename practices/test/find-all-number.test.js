import { findAllNumbers } from '../find-all-number';

describe('Find all number have first digit is old', () => {
    it('should return -1 when not have correct input', () => {
        expect(findAllNumbers([])).toEqual([]);
        expect(findAllNumbers(1)).toEqual([]);
        expect(findAllNumbers('1')).toEqual([]);
        expect(findAllNumbers(null)).toEqual([]);
        expect(findAllNumbers('')).toEqual([]);
    });

    it('should return empty array when not have correct number pass condition', () => {
        expect(findAllNumbers([2, 4, 6])).toEqual([]);
        expect(findAllNumbers([212, 423, 45321])).toEqual([]);
    });
    it('should return array contains correct number pass condition', () => {
        expect(findAllNumbers([12, 34, 22, 46])).toEqual([12, 34]);
        expect(findAllNumbers([212, 323, 45321, 1122])).toEqual([323, 1122]);
        expect(findAllNumbers([212, -323, 45321, 1122, -3])).toEqual([-323, 1122, -3]);
    });
});
