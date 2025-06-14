import { isIncreasingNumberList } from './array-check-09';

describe('isIncreasingNumberList()', () => {
  test('should return false when arr is not array', () => {
    expect(isIncreasingNumberList('')).toBe(false);
    expect(isIncreasingNumberList(null)).toBe(false);
    expect(isIncreasingNumberList(undefined)).toBe(false);
    expect(isIncreasingNumberList(1)).toBe(false);
    expect(isIncreasingNumberList({})).toBe(false);
  });

  test('should return false when arr is a empty array', () => {
    expect(isIncreasingNumberList([])).toBe(false);
  });

  test('should return false then arr is not an increasing number list', () => {
    expect(isIncreasingNumberList([1, 2, 5, 4])).toBe(false);
    expect(isIncreasingNumberList([1, 2, 5, 5])).toBe(false);
  });

  test('should return true then arr is an increasing number list', () => {
    expect(isIncreasingNumberList([1, 2, 5, 8])).toBe(true);
  });
});
