import { isSymmetricList, isSymmetricListV2 } from './array-check-11';

describe('isSymmetricList()', () => {
  test('should return false if numberList is not array', () => {
    expect(isSymmetricList('')).toBe(false);
    expect(isSymmetricList(null)).toBe(false);
    expect(isSymmetricList(undefined)).toBe(false);
    expect(isSymmetricList(1)).toBe(false);
    expect(isSymmetricList({})).toBe(false);
  });

  test('should return false when numberList is a empty array', () => {
    expect(isSymmetricList([])).toBe(false);
  });

  test('should return false when numberList is not a symmetric list', () => {
    expect(isSymmetricList([1, 2, 3, 5])).toBe(false);
  });

  test('should return true when numberList is a symmetric list', () => {
    expect(isSymmetricList([1, 2, 3, 2, 1])).toBe(true);
    expect(isSymmetricList([2, 4, 6, 6, 4, 2])).toBe(true);
  });
});

describe('isSymmetricListV2()', () => {
  test('should return false if numberList is not array', () => {
    expect(isSymmetricListV2('')).toBe(false);
    expect(isSymmetricListV2(null)).toBe(false);
    expect(isSymmetricListV2(undefined)).toBe(false);
    expect(isSymmetricListV2(1)).toBe(false);
    expect(isSymmetricListV2({})).toBe(false);
  });

  test('should return false when numberList is a empty array', () => {
    expect(isSymmetricListV2([])).toBe(false);
  });

  test('should return false when numberList is not a symmetric list', () => {
    expect(isSymmetricListV2([1, 2, 3, 5])).toBe(false);
  });

  test('should return true when numberList is a symmetric list', () => {
    expect(isSymmetricListV2([1, 2, 3, 2, 1])).toBe(true);
    expect(isSymmetricListV2([2, 4, 6, 6, 4, 2])).toBe(true);
  });
});
