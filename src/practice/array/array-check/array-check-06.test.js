import { hasStudent } from './array-check-06';

describe('hasStudent()', () => {
  test('should return false when studentList is not array', () => {
    expect(hasStudent({}, 1)).toBe(false);
    expect(hasStudent('', 1)).toBe(false);
    expect(hasStudent(123, 1)).toBe(false);
    expect(hasStudent(undefined, 1)).toBe(false);
    expect(hasStudent(null, 1)).toBe(false);
  });

  test('should return false when studentList is a empty array', () => {
    expect(hasStudent([], 1)).toBe(false);
  });

  test('should return false when studentId is not a number', () => {
    expect(hasStudent([{ id: 1, name: 'Easy' }], '123')).toBe(false);
    expect(hasStudent([{ id: 1, name: 'Easy' }], null)).toBe(false);
    expect(hasStudent([{ id: 1, name: 'Easy' }], undefined)).toBe(false);
    expect(hasStudent([{ id: 1, name: 'Easy' }], {})).toBe(false);
    expect(hasStudent([{ id: 1, name: 'Easy' }], [])).toBe(false);
  });

  test('should return false when studentList does not have student with studentId', () => {
    expect(hasStudent([{ id: 1, name: 'Easy' }], 12)).toBe(false);
    expect(hasStudent([{ score: 10, name: 'Frontend' }], 12)).toBe(false);
  });

  test('should return true when studentList has student with studentId', () => {
    expect(
      hasStudent(
        [
          { id: 1, name: 'Easy' },
          { id: 2, name: 'Frontend' },
        ],
        2,
      ),
    ).toBe(true);
  });
});
