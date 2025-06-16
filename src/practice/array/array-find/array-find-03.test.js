import { findFirstPositiveEven } from './array-find-03';

describe('findFirstPositiveEven()', () => {
  test('should return undefined if numberList is not array', () => {
    expect(findFirstPositiveEven('')).toBe(undefined);
    expect(findFirstPositiveEven(null)).toBe(undefined);
    expect(findFirstPositiveEven(undefined)).toBe(undefined);
    expect(findFirstPositiveEven(1)).toBe(undefined);
    expect(findFirstPositiveEven({})).toBe(undefined);
  });

  test('should return undefined when numberList is a empty array', () => {
    expect(findFirstPositiveEven([])).toBe(undefined);
  });

  test('should return undefined when numberList does not have any positive even number', () => {
    expect(findFirstPositiveEven([-2, 3, 0, 9])).toBe(undefined);
  });

  test('should return correct first positive even number', () => {
    expect(findFirstPositiveEven([-2, 4, 3, 2])).toBe(4);
  });
});
