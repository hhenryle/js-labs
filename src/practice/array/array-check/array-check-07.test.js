import { hasAlice } from './array-check-07';

describe('hasAlice()', () => {
  test('should return false when studentList is not array', () => {
    expect(hasAlice('123')).toBe(false);
    expect(hasAlice(null)).toBe(false);
    expect(hasAlice(undefined)).toBe(false);
    expect(hasAlice({})).toBe(false);
    expect(hasAlice(123)).toBe(false);
  });

  test('should return false for empty array', () => {
    expect(hasAlice([])).toBe(false);
  });

  test("should return false when studentList doesn't have Alice", () => {
    expect(hasAlice([{ id: 1, name: 'Alice', gender: 'male' }])).toBe(false);
    expect(hasAlice([{ id: 2, name: 'Henry', gender: 'female' }])).toBe(false);
  });

  test('should return true when studentList has student that has name is Alice and gender is Female', () => {
    expect(hasAlice([{ id: 1, name: 'Alice', gender: 'female' }])).toBe(true);
    expect(
      hasAlice([
        { id: 1, name: 'Alice', gender: 'male' },
        { id: 2, name: 'aliCE', gender: 'female' },
      ]),
    ).toBe(true);
  });
});
