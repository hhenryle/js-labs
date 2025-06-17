import { sumEvenNumbers } from './array-sum-01';

describe('sumEvenNumbers()', () => {
  test('should return 0 when numberList is empty or length <= 1', () => {
    expect(sumEvenNumbers([])).toBe(0);
    expect(sumEvenNumbers(null)).toBe(0);
    expect(sumEvenNumbers()).toBe(0);
    expect(sumEvenNumbers('123')).toBe(0);
    expect(sumEvenNumbers(123)).toBe(0);
    expect(sumEvenNumbers({})).toBe(0);
    expect(sumEvenNumbers([10])).toBe(0);
  });

  test('should return 0 when numberList is decreasing array', () => {
    expect(sumEvenNumbers([8, 2, 0, -2])).toBe(0);
  });

  test('should return correct sum when number having even number > prev number', () => {
    expect(sumEvenNumbers([-5, -2, 5, 4, 8])).toBe(6);
  });
});
