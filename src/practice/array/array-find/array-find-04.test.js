import { findLastNegativeOdd, findLastNegativeOddV2 } from './array-find-04';

describe('findLastNegativeOdd()', () => {
  test('should return undefined if numberList is not array', () => {
    expect(findLastNegativeOdd('')).toBe(undefined);
    expect(findLastNegativeOdd(null)).toBe(undefined);
    expect(findLastNegativeOdd(undefined)).toBe(undefined);
    expect(findLastNegativeOdd(1)).toBe(undefined);
    expect(findLastNegativeOdd({})).toBe(undefined);
  });

  test('should return undefined when numberList is a empty array', () => {
    expect(findLastNegativeOdd([])).toBe(undefined);
  });

  test('should return undefined when numberList does not have any negative odd number', () => {
    expect(findLastNegativeOdd([-2, 0, 3, 8, 1])).toBe(undefined);
  });

  test('should return correct last negative odd number', () => {
    expect(findLastNegativeOdd([-1, -3, -5])).toBe(-5);
  });
});

describe('findLastNegativeOddV2()', () => {
  test('should return undefined if numberList is not array', () => {
    expect(findLastNegativeOddV2('')).toBe(undefined);
    expect(findLastNegativeOddV2(null)).toBe(undefined);
    expect(findLastNegativeOddV2(undefined)).toBe(undefined);
    expect(findLastNegativeOddV2(1)).toBe(undefined);
    expect(findLastNegativeOddV2({})).toBe(undefined);
  });

  test('should return undefined when numberList is a empty array', () => {
    expect(findLastNegativeOddV2([])).toBe(undefined);
  });

  test('should return undefined when numberList does not have any negative odd number', () => {
    expect(findLastNegativeOddV2([-2, 0, 3, 8, 1])).toBe(undefined);
  });

  test('should return correct last negative odd number', () => {
    expect(findLastNegativeOddV2([-1, -3, -5])).toBe(-5);
  });
});
