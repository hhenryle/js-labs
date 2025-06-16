import { findLastPerfectSquare } from './array-find-06';

describe('findLastPerfectSquare()', () => {
  test('should return undefined if numberList is not array', () => {
    expect(findLastPerfectSquare('')).toBe(undefined);
    expect(findLastPerfectSquare(null)).toBe(undefined);
    expect(findLastPerfectSquare(undefined)).toBe(undefined);
    expect(findLastPerfectSquare(1)).toBe(undefined);
    expect(findLastPerfectSquare({})).toBe(undefined);
  });

  test('should return undefined when numberList is a empty array', () => {
    expect(findLastPerfectSquare([])).toBe(undefined);
  });

  test('should return undefined when numberList does not have any perfect square number', () => {
    expect(findLastPerfectSquare([2, 3, 5])).toBe(undefined);
  });

  test('should return correct the last perfect square number', () => {
    expect(findLastPerfectSquare([4, 16, 25, 36, 40])).toBe(36);
  });
});
