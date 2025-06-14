import { hasFibonaciNumber } from './array-check-12';

describe('hasFibonaciNumber()', () => {
  test('should return false if numberList is not array', () => {
    expect(hasFibonaciNumber('')).toBe(false);
    expect(hasFibonaciNumber(null)).toBe(false);
    expect(hasFibonaciNumber(undefined)).toBe(false);
    expect(hasFibonaciNumber(1)).toBe(false);
    expect(hasFibonaciNumber({})).toBe(false);
  });

  test('should return false when numberList is a empty array', () => {
    expect(hasFibonaciNumber([])).toBe(false);
  });

  test('should return false when numberList does not have any fibonaci number', () => {
    expect(hasFibonaciNumber([4, 6, 7])).toBe(false);
  });

  test('should return true when numberList has at least a fibonaci number', () => {
    expect(hasFibonaciNumber([0, 1, 2, 3, 4, 5])).toBe(true);
    expect(hasFibonaciNumber([89])).toBe(true);
  });
});
