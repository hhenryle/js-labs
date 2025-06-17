import { calcCartTotal } from './array-sum-04';

describe('calcCartTotal()', () => {
  test('should return 0 when cardItemList is empty', () => {
    expect(calcCartTotal([])).toBe(0);
    expect(calcCartTotal(null)).toBe(0);
    expect(calcCartTotal()).toBe(0);
    expect(calcCartTotal({})).toBe(0);
    expect(calcCartTotal('123')).toBe(0);
    expect(calcCartTotal(123)).toBe(0);
  });

  test('should return 0 of either price or quantity is zero', () => {
    expect(calcCartTotal([{ id: 1, product: { id: 1, price: 50000 }, quantity: 0 }])).toBe(0);
    expect(calcCartTotal([{ id: 1, product: { id: 1, price: 0 }, quantity: 1 }])).toBe(0);
  });

  test('return correct total if price and quantity > 0', () => {
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
      ]),
    ).toBe(250000);
  });
});
