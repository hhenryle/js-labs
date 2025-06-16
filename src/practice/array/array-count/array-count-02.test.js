import { countNumbers } from './array-count-02';

describe('countNumbers()', () => {
  test('should return 0 if numberList is not array', () => {
    expect(countNumbers('')).toBe(0);
    expect(countNumbers(123)).toBe(0);
    expect(countNumbers({})).toBe(0);
    expect(countNumbers(undefined)).toBe(0);
    expect(countNumbers(null)).toBe(0);
  });

  test('should return 0 if numberList is empty', () => {
    expect(countNumbers([])).toBe(0);
  });

  test('should return 0 if not having number < prev number', () => {
    expect(countNumbers([1, 2, 3])).toBe(0);
  });

  test('should return correct number if having number < prev number', () => {
    expect(countNumbers([1, 4, 3, 10, 9, 8])).toBe(3);
  });
});
