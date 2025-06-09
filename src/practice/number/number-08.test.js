import { isDivisibleBy10, isDivisibleBy10V2 } from './number-08';

describe('isDivisibleBy10', () => {
  test('should return false when n <= 0 or n >= 1000000', () => {
    expect(isDivisibleBy10(0)).toBe(false);
    expect(isDivisibleBy10(1000000)).toBe(false);
    expect(isDivisibleBy10(-3)).toBe(false);
  });

  test('should return false when sum of all digits of a number is not divisible by 10', () => {
    expect(isDivisibleBy10(7)).toBe(false);
    expect(isDivisibleBy10(10)).toBe(false);
    expect(isDivisibleBy10(35)).toBe(false);
  });

  test('should return false when sum of all digits of a number is divisible by 10', () => {
    expect(isDivisibleBy10(1234)).toBe(true);
    expect(isDivisibleBy10(19)).toBe(true);
    expect(isDivisibleBy10(2521)).toBe(true);
    expect(isDivisibleBy10(123455)).toBe(true);
  });
});

describe('isDivisibleBy10V2', () => {
  test('should return false when n <= 0 or n >= 1000000', () => {
    expect(isDivisibleBy10V2(0)).toBe(false);
    expect(isDivisibleBy10V2(1000000)).toBe(false);
    expect(isDivisibleBy10V2(-3)).toBe(false);
  });

  test('should return false when sum of all digits of a number is not divisible by 10', () => {
    expect(isDivisibleBy10V2(7)).toBe(false);
    expect(isDivisibleBy10V2(10)).toBe(false);
    expect(isDivisibleBy10V2(35)).toBe(false);
  });

  test('should return false when sum of all digits of a number is divisible by 10', () => {
    expect(isDivisibleBy10V2(1234)).toBe(true);
    expect(isDivisibleBy10V2(19)).toBe(true);
    expect(isDivisibleBy10V2(2521)).toBe(true);
    expect(isDivisibleBy10V2(123455)).toBe(true);
  });
});
