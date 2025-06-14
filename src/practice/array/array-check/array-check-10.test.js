import { isDecreasingNumberList } from './array-check-10';

describe('isDecreasingNumberList()', () => {
  test('should return false when arr is not array', () => {
    expect(isDecreasingNumberList('')).toBe(false);
    expect(isDecreasingNumberList(null)).toBe(false);
    expect(isDecreasingNumberList(undefined)).toBe(false);
    expect(isDecreasingNumberList(1)).toBe(false);
    expect(isDecreasingNumberList({})).toBe(false);
  });

  test('should return false when arr is a empty array', () => {
    expect(isDecreasingNumberList([])).toBe(false);
  });

  test('should return false then arr is not an descreasing number list', () => {
    expect(isDecreasingNumberList([10, 5, 3, 3])).toBe(false);
    expect(isDecreasingNumberList([10, 4, 3, 6])).toBe(false);
  });

  test('should return true then arr is an descreasing number list', () => {
    expect(isDecreasingNumberList([10, 6, 3, 2])).toBe(true);
  });
});
