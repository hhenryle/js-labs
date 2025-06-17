import { sumAllDigits } from './array-sum-02';

describe('sumAllDigits()', () => {
  test('should return 0 when numberList is empty', () => {
    expect(sumAllDigits([])).toBe(0);
    expect(sumAllDigits(null)).toBe(0);
    expect(sumAllDigits()).toBe(0);
    expect(sumAllDigits('123')).toBe(0);
    expect(sumAllDigits(123)).toBe(0);
    expect(sumAllDigits({})).toBe(0);
  });

  test('should return correct sum of digits in numberList', () => {
    expect(sumAllDigits([4])).toBe(4);
    expect(sumAllDigits([-12, 56, 0])).toBe(14);
    expect(sumAllDigits([1234, 55])).toBe(20);
  });
});
