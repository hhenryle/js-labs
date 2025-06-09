import { isPerfectNumber } from './number-06';

describe('isPerfectNumber()', () => {
  test('should return false when n <= 1 or n >= 1000', () => {
    expect(isPerfectNumber(1)).toBe(false);
    expect(isPerfectNumber(1000)).toBe(false);
    expect(isPerfectNumber(1234)).toBe(false);
    expect(isPerfectNumber(0)).toBe(false);
  });

  test('should return false when n is not a perfect number', () => {
    expect(isPerfectNumber(12)).toBe(false);
    expect(isPerfectNumber(32)).toBe(false);
    expect(isPerfectNumber(66)).toBe(false);
  });

  test('should return true when n is a perfect number', () => {
    expect(isPerfectNumber(6)).toBe(true);
    expect(isPerfectNumber(28)).toBe(true);
    expect(isPerfectNumber(496)).toBe(true);
  });
});
