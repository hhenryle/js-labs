import { findFirstEmail } from './array-find-07';

describe('findFirstEmail()', () => {
  test('should return undefined when strList is not array', () => {
    expect(findFirstEmail('')).toBe(undefined);
    expect(findFirstEmail(null)).toBe(undefined);
    expect(findFirstEmail(undefined)).toBe(undefined);
    expect(findFirstEmail(1)).toBe(undefined);
    expect(findFirstEmail({})).toBe(undefined);
  });

  test('should return undefined when strList is a empty array', () => {
    expect(findFirstEmail([])).toBe(undefined);
  });

  test("should return undefined when strList doesn't not have any email", () => {
    expect(findFirstEmail(['abc@easy.frontend', 'ab@easy.com'])).toBe(undefined);
  });

  test('should return correct first email', () => {
    expect(findFirstEmail(['abc@easy.frontend', 'abc@gmail.com'])).toBe('abc@gmail.com');
  });
});
