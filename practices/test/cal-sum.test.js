import { sumS } from '../cal-sum-s';

describe('Sum from 1  to n', () => {
    test('should return -1 when n less 0', () => {
        expect(sumS(-1)).toBe(-1);
    });
    test('should return 0 when n equal 0', () => {
        expect(sumS(0)).toBe(0);
    });

    test('should return correct value', () => {
        expect(sumS(2)).toBe(3);
    });
});
