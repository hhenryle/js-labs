import { checkIfAllEven } from './09-05-main';

describe('checkIfAllEven()', () => {
  test('should return false when numberList is not an array', () => {
    expect(checkIfAllEven(1)).toBe(false);
    expect(checkIfAllEven(undefined)).toBe(false);
    expect(checkIfAllEven(null)).toBe(false);
    expect(checkIfAllEven({})).toBe(false);
    expect(checkIfAllEven('')).toBe(false);
  });

  test('should return false when numberList is empty', () => {
    expect(checkIfAllEven([])).toBe(false);
  });

  test('should return false when numberList has no even number', () => {
    expect(checkIfAllEven([1, 3, 7, 11])).toBe(false);
  });

  test('should return false when numberList has some even numbers', () => {
    expect(checkIfAllEven([2, 4, 8, 22, 3, 11])).toBe(false);
  });

  test('should return true when numberList has all even numbers', () => {
    expect(checkIfAllEven([2, 4, 8, 22, 44])).toBe(true);
  });
});
