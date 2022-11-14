import { calcCartTotal } from '../cal-sum-cart';

const productList = [
    { id: 1, product: { id: 1, price: 5000 }, quantity: 5 },
    { id: 2, product: { id: 2, price: 5000 }, quantity: 2 },
];

describe('calcCartTotal(productList)', () => {
    it('should return 0 when have incorrect input', () => {
        expect(calcCartTotal({})).toBe(0);
        expect(calcCartTotal(1)).toBe(0);
        expect(calcCartTotal('')).toBe(0);
    });
    it('should return price total ', () => {
        expect(calcCartTotal(productList)).toBe(35000);
    });
    it('should return 0 when not have product ', () => {
        expect(calcCartTotal([])).toBe(0);
    });
});
