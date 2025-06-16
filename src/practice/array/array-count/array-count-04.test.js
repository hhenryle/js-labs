import { countUniqueNumbers } from './array-count-04';

describe('countUniqueNumbers()', () => {
  test('should return 0 if numberList is empty', () => {
    expect(countUniqueNumbers([])).toBe(0);
    expect(countUniqueNumbers()).toBe(0);
    expect(countUniqueNumbers(null)).toBe(0);
    expect(countUniqueNumbers(123)).toBe(0);
    expect(countUniqueNumbers('123')).toBe(0);
    expect(countUniqueNumbers({})).toBe(0);
  });

  test('should return length if list is unique', () => {
    expect(countUniqueNumbers([1])).toBe(1);
    expect(countUniqueNumbers([1, 2])).toBe(2);
    expect(countUniqueNumbers([1, 2, 3])).toBe(3);
  });

  test('should return correct count of unique numbers ', () => {
    expect(countUniqueNumbers([1, 1, 1])).toBe(1);
    expect(countUniqueNumbers([1, 2, 3, 2, 1])).toBe(3);
  });
});
