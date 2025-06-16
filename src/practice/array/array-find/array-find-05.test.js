import { findSecondLargestNumber } from './array-find-05';

describe('findSecondLargestNumber()', () => {
  test('should return undefined if numberList is not array', () => {
    expect(findSecondLargestNumber('')).toBe(undefined);
    expect(findSecondLargestNumber(null)).toBe(undefined);
    expect(findSecondLargestNumber(undefined)).toBe(undefined);
    expect(findSecondLargestNumber(1)).toBe(undefined);
    expect(findSecondLargestNumber({})).toBe(undefined);
  });

  test('should return undefined when numberList is a empty array or length is 1', () => {
    expect(findSecondLargestNumber([])).toBe(undefined);
    expect(findSecondLargestNumber([1])).toBe(undefined);
  });

  test('should return the secondary largest number', () => {
    expect(findSecondLargestNumber([1, 2])).toBe(1);
    expect(findSecondLargestNumber([1, 2, 3, 4])).toBe(3);
  });
});
