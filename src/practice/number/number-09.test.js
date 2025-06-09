import { hasTwoDigitsWithSum, hasTwoDigitsWithSumV2 } from './number-09';

describe('hasTwoDigitsWithSum()', () => {
  test('should return false when n <= 9 or n >= 1000000', () => {
    expect(hasTwoDigitsWithSum(9, 2)).toBe(false);
    expect(hasTwoDigitsWithSum(1000000, 2)).toBe(false);
    expect(hasTwoDigitsWithSum(0, 2)).toBe(false);
  });

  test('should return false when sum <= 0 or sum >= 19', () => {
    expect(hasTwoDigitsWithSum(123, 0)).toBe(false);
    expect(hasTwoDigitsWithSum(2345, 20)).toBe(false);
  });

  test('should return false when sum of all digits of a number is not equal sum', () => {
    expect(hasTwoDigitsWithSum(101, 3)).toBe(false);
    expect(hasTwoDigitsWithSum(2345, 18)).toBe(false);
  });

  test('should return true when sum of all digits of a number is equal sum', () => {
    expect(hasTwoDigitsWithSum(12345, 15)).toBe(true);
    expect(hasTwoDigitsWithSum(11, 2)).toBe(true);
  });
});

describe('hasTwoDigitsWithSumV2()', () => {
  test('should return false when n <= 9 or n >= 1000000', () => {
    expect(hasTwoDigitsWithSumV2(9, 2)).toBe(false);
    expect(hasTwoDigitsWithSumV2(1000000, 2)).toBe(false);
    expect(hasTwoDigitsWithSumV2(0, 2)).toBe(false);
  });

  test('should return false when sum <= 0 or sum >= 19', () => {
    expect(hasTwoDigitsWithSumV2(123, 0)).toBe(false);
    expect(hasTwoDigitsWithSumV2(2345, 20)).toBe(false);
  });

  test('should return false when sum of all digits of a number is not equal sum', () => {
    expect(hasTwoDigitsWithSumV2(101, 3)).toBe(false);
    expect(hasTwoDigitsWithSumV2(2345, 18)).toBe(false);
  });

  test('should return true when sum of all digits of a number is equal sum', () => {
    expect(hasTwoDigitsWithSumV2(12345, 15)).toBe(true);
    expect(hasTwoDigitsWithSumV2(11, 2)).toBe(true);
  });
});
