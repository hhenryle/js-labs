import { hasFalsy } from './array-check-05';

describe('hasFalsy()', () => {
  test('should return false when arr is not array', () => {
    expect(hasFalsy('')).toBe(false);
    expect(hasFalsy(null)).toBe(false);
    expect(hasFalsy(undefined)).toBe(false);
    expect(hasFalsy(1)).toBe(false);
    expect(hasFalsy({})).toBe(false);
  });

  test('should return false when arr is a empty array', () => {
    expect(hasFalsy([])).toBe(false);
  });

  test('should return false when arr has all elements are truthy', () => {
    expect(hasFalsy([123, '123', {}, []])).toBe(false);
  });

  test('should return true when arr has at least a falsy', () => {
    expect(hasFalsy([false, 123, '', true])).toBe(true);
    expect(hasFalsy([123, null, 12])).toBe(true);
  });
});
