import { countPositiveEvenNumbers } from './array-count-01';

describe('countPositiveEvenNumbers()', () => {
  test('should return 0 if numberList is not array', () => {
    expect(countPositiveEvenNumbers('')).toBe(0);
    expect(countPositiveEvenNumbers(123)).toBe(0);
    expect(countPositiveEvenNumbers({})).toBe(0);
    expect(countPositiveEvenNumbers(undefined)).toBe(0);
    expect(countPositiveEvenNumbers(null)).toBe(0);
  });

  test('should return 0 if numberList has length <= 1', () => {
    expect(countPositiveEvenNumbers([])).toBe(0);
    expect(countPositiveEvenNumbers([1])).toBe(0);
  });

  test('should return 0 if numberList does not have any positive even numbers', () => {
    expect(countPositiveEvenNumbers([1, -2, 0, 3])).toBe(0);
  });

  test('should return correct number if numberList has positive even numbers', () => {
    expect(countPositiveEvenNumbers([1, 3, 10, 9, 8, 2])).toBe(3);
  });
});
