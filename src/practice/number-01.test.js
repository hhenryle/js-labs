import { isIncreasingNumber, isIncreasingNumberV2 } from './number-01';

describe('isIncreasingNumber()', () => {
  test('should return false when number < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });

  test('should return false when number is not an increasing number', () => {
    [121, 987, 222].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(false);
    });
  });

  test('should return true when number is an increasing number', () => {
    [123, 23, 369].forEach((x) => {
      expect(isIncreasingNumber(x)).toBe(true);
    });
  });
});

describe('isIncreasingNumberV2()', () => {
  test('should return false when number >= 1000000 or number <= 0', () => {
    expect(isIncreasingNumberV2(1000000)).toBe(false);
    expect(isIncreasingNumberV2(-10)).toBe(false);
  });

  test('should return false when number has one digit', () => {
    expect(isIncreasingNumberV2(9)).toBe(false);
  });

  test('should return false when number is not an increasing number', () => {
    expect(isIncreasingNumberV2(121)).toBe(false);
  });

  test('should return true when number is an increasing number', () => {
    expect(isIncreasingNumberV2(12345)).toBe(true);
  });
});
