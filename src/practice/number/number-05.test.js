import { isPerfectSquare } from './number-05';

describe('isPerfectSquare', () => {
  test('should return false when n <= 0 or n >= 1000000', () => {
    expect(isPerfectSquare(0)).toBe(false);
    expect(isPerfectSquare(1000000)).toBe(false);
    expect(isPerfectSquare(-3)).toBe(false);
  });

  test('should return false when n is not a prefect square number', () => {
    expect(isPerfectSquare(2)).toBe(false);
    expect(isPerfectSquare(8)).toBe(false);
    expect(isPerfectSquare(35)).toBe(false);
  });

  test('should return false when n is a prefect square number', () => {
    expect(isPerfectSquare(1)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(16)).toBe(true);
  });
});
