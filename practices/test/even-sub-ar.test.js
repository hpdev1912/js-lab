import { findAllPositiveEvenSubArr } from '../even-sub-arr';

describe('findAllPositiveEvenSubArr(numberList)', () => {
    it('should return empty when input was wrong', () => {
        expect(findAllPositiveEvenSubArr('')).toEqual([]);
        expect(findAllPositiveEvenSubArr(1)).toEqual([]);
        expect(findAllPositiveEvenSubArr({})).toEqual([]);
        expect(findAllPositiveEvenSubArr(null)).toEqual([]);
        expect(findAllPositiveEvenSubArr([])).toEqual([]);
    });
    it('should return empty when not have even sub arr', () => {
        expect(findAllPositiveEvenSubArr([1, 5, 7, 9, 11, 13, 15])).toEqual([]);
    });
    it('should return array contains sub even num when input was wrong', () => {
        expect(findAllPositiveEvenSubArr([1, 4, 6, 9, 11, 12, 14])).toEqual([
            [4, 6],
            [12, 14],
        ]);
    });
});
