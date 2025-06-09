import { isSymetricNumber, isSymetricNumberV2 } from './number-07';

describe('isSymetricNumber()', () => {
  test('should return false when n <= 1 || n>= 1000000', () => {
    expect(isSymetricNumber(1)).toBe(false);
    expect(isSymetricNumber(-5)).toBe(false);
    expect(isSymetricNumber(1000000)).toBe(false);
  });

  test('should return false when n is not a symetric number', () => {
    expect(isSymetricNumber(10)).toBe(false);
    expect(isSymetricNumber(123)).toBe(false);
    expect(isSymetricNumber(790)).toBe(false);
  });

  test('should return true when n is a symetric number', () => {
    expect(isSymetricNumber(2)).toBe(true);
    expect(isSymetricNumber(121)).toBe(true);
    expect(isSymetricNumber(35753)).toBe(true);
  });
});

describe('isSymetricNumberV2()', () => {
  test('should return false when n <= 1 || n>= 1000000', () => {
    expect(isSymetricNumberV2(1)).toBe(false);
    expect(isSymetricNumberV2(-5)).toBe(false);
    expect(isSymetricNumberV2(1000000)).toBe(false);
  });

  test('should return false when n is not a symetric number', () => {
    expect(isSymetricNumberV2(10)).toBe(false);
    expect(isSymetricNumberV2(123)).toBe(false);
    expect(isSymetricNumberV2(790)).toBe(false);
  });

  test('should return true when n is a symetric number', () => {
    expect(isSymetricNumberV2(2)).toBe(true);
    expect(isSymetricNumberV2(121)).toBe(true);
    expect(isSymetricNumberV2(35753)).toBe(true);
  });
});
