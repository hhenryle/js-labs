import { sumAllMinDigits } from './array-sum-03';

describe('sumAllMinDigits', () => {
  test('should 0 when numberList is empty', () => {
    expect(sumAllMinDigits([])).toBe(0);
    expect(sumAllMinDigits(null)).toBe(0);
    expect(sumAllMinDigits()).toBe(0);
    expect(sumAllMinDigits('123')).toBe(0);
    expect(sumAllMinDigits(123)).toBe(0);
    expect(sumAllMinDigits({})).toBe(0);
  });

  test('should return correct sum of min digit of number', () => {
    expect(sumAllMinDigits([123])).toBe(1);
    expect(sumAllMinDigits([123, 532])).toBe(3);
    expect(sumAllMinDigits([123, 532, -6])).toBe(9);
  });
});
