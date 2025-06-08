import { isIncreasingNumberByDistance } from './number-03';

describe('isIncreasingNumberByDistance()', () => {
  test('should return false when number < 10', () => {
    const distance = 1;
    Array.from({ length: 10 }, (x, idx) => idx).forEach((x) => {
      expect(isIncreasingNumberByDistance(x, distance)).toBe(false);
    });
  });

  test('should return false when number is not an increasing number', () => {
    const distance = 1;
    [212, 545, 987].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, distance)).toBe(false);
    });
  });

  test('should return false when number is increasing number but not by distance', () => {
    [124, 236, 246].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 1)).toBe(false);
    });
  });

  test('should return true when number is an Increasing number and by distance', () => {
    [123, 456, 789].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 1)).toBe(true);
    });

    [135, 246].forEach((x) => {
      expect(isIncreasingNumberByDistance(x, 2)).toBe(true);
    });
  });
});
