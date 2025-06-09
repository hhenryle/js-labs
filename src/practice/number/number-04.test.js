import { isPrime } from './number-04';

describe('isPrime()', () => {
  test('should return false when n <= 0 or n >= 1000000', () => {
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1000000)).toBe(false);
    expect(isPrime(-2)).toBe(false);
  });

  test('should return false when n is not a prime number', () => {
    expect(isPrime(99)).toBe(false);
    expect(isPrime(12)).toBe(false);
    expect(isPrime(1)).toBe(false);
  });

  test('should return true when n is a prime number', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(59)).toBe(true);
    expect(isPrime(13)).toBe(true);
  });
});
