import { hasEvenNumberGreaterThanN } from './array-check-01';

describe('hasEvenNumberGreaterThanN()', () => {
  test('should return fasle when mumberList is not array', () => {
    expect(hasEvenNumberGreaterThanN(null, 1)).toBe(false);
    expect(hasEvenNumberGreaterThanN({}, 1)).toBe(false);
    expect(hasEvenNumberGreaterThanN('', 1)).toBe(false);
    expect(hasEvenNumberGreaterThanN(undefined, 1)).toBe(false);
    expect(hasEvenNumberGreaterThanN(1, 1)).toBe(false);
  });

  test('should return fasle when mumberList is a empty array', () => {
    expect(hasEvenNumberGreaterThanN([], 1)).toBe(false);
  });

  test('should return fasle when n is a number', () => {
    expect(hasEvenNumberGreaterThanN([2, 3, 4], undefined)).toBe(false);
    expect(hasEvenNumberGreaterThanN([2, 3, 4], null)).toBe(false);
    expect(hasEvenNumberGreaterThanN([2, 3, 4], '123')).toBe(false);
    expect(hasEvenNumberGreaterThanN([2, 3, 4], [])).toBe(false);
    expect(hasEvenNumberGreaterThanN([2, 3, 4], {})).toBe(false);
  });

  test('should return false if does not have even number greater than n', () => {
    expect(hasEvenNumberGreaterThanN([2, 3, 4], 5)).toBe(false);
    expect(hasEvenNumberGreaterThanN([2, 3, 7], 5)).toBe(false);
    expect(hasEvenNumberGreaterThanN([2, 3, 6], 6)).toBe(false);
  });

  test('should return true ifeven number greater than n', () => {
    expect(hasEvenNumberGreaterThanN([2, 8, 4], 5)).toBe(true);
    expect(hasEvenNumberGreaterThanN([2, 3, 4, 6], 5)).toBe(true);
  });
});
