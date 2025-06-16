import { findMinPositive } from './array-find-01';

describe('findMinPositive()', () => {
  test('should return undefined if numberList is not array', () => {
    expect(findMinPositive('')).toBe(undefined);
    expect(findMinPositive(null)).toBe(undefined);
    expect(findMinPositive(undefined)).toBe(undefined);
    expect(findMinPositive(1)).toBe(undefined);
    expect(findMinPositive({})).toBe(undefined);
  });

  test('should return undefined when numberList is a empty array', () => {
    expect(findMinPositive([])).toBe(undefined);
  });

  test('should return undefined when numberList is not have any positive numbers', () => {
    expect(findMinPositive([-10, 0, -2, -1])).toBe(undefined);
  });

  test('should return correct positive number', () => {
    expect(findMinPositive([-10, 0, 2])).toBe(2);
    expect(findMinPositive([-10, 0, 2, 8])).toBe(2);
  });
});
