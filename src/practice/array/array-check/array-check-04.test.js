import { hasTruthy } from './array-check-04';

describe('hasTruthy()', () => {
  test('should return false when arr is not array', () => {
    expect(hasTruthy('')).toBe(false);
    expect(hasTruthy(null)).toBe(false);
    expect(hasTruthy(undefined)).toBe(false);
    expect(hasTruthy(1)).toBe(false);
    expect(hasTruthy({})).toBe(false);
  });

  test('should return false when arr is a empty array', () => {
    expect(hasTruthy([])).toBe(false);
  });

  test('should return false when arr has all elements are falsy', () => {
    expect(hasTruthy([false, ''])).toBe(false);
    expect(hasTruthy([undefined, '', 0])).toBe(false);
  });

  test('should return true when arr has at least a truethy', () => {
    expect(hasTruthy([false, '123', '', true])).toBe(true);
    expect(hasTruthy([undefined, '', 12])).toBe(true);
  });
});
