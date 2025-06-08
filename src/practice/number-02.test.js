import { isDecreasingNumber, isDecreasingNumberV2 } from './number-02';

describe('isDecreasingNumber()', () => {
  test('should return false when number < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isDecreasingNumber(x)).toBe(false);
    });
  });

  test('should return false when number is not an decreasing number', () => {
    [212, 345, 989].forEach((x) => {
      expect(isDecreasingNumber(x)).toBe(false);
    });
  });

  test('should return true when number is an decreasing number', () => {
    [987, 751, 320].forEach((x) => {
      expect(isDecreasingNumber(x)).toBe(true);
    });
  });
});

describe('isDecreasingNumberV2()', () => {
  test('should return false when number < 10', () => {
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isDecreasingNumberV2(x)).toBe(false);
    });
  });

  test('should return false when number is not an decreasing number', () => {
    [212, 345, 989].forEach((x) => {
      expect(isDecreasingNumberV2(x)).toBe(false);
    });
  });

  test('should return true when number is an decreasing number', () => {
    [987, 751, 320].forEach((x) => {
      expect(isDecreasingNumberV2(x)).toBe(true);
    });
  });
});
