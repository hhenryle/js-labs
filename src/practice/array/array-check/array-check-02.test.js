import { hasOddNumberDivisibleBy3 } from './array-check-02';

describe('hasOddNumberDivisibleBy3', () => {
  test('should false when numberList is not array', () => {
    expect(hasOddNumberDivisibleBy3('')).toBe(false);
    expect(hasOddNumberDivisibleBy3({})).toBe(false);
    expect(hasOddNumberDivisibleBy3(1)).toBe(false);
    expect(hasOddNumberDivisibleBy3(undefined)).toBe(false);
    expect(hasOddNumberDivisibleBy3(null)).toBe(false);
  });

  test('should false when numberList is a empty array', () => {
    expect(hasOddNumberDivisibleBy3([])).toBe(false);
  });

  test('should false when numberList does not have any odd number divisibale by 3', () => {
    expect(hasOddNumberDivisibleBy3([7, 13, 35, 8])).toBe(false);
  });

  test('should true when numberList does not has at least a number divisibale by 3', () => {
    expect(hasOddNumberDivisibleBy3([7, 13, 35, 15, 8])).toBe(true);
  });
});
