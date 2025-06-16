import { countStudents } from './array-count-06';

describe('countStudents', () => {
  test('should return 0 when studentList is empty', () => {
    expect(countStudents([], 5)).toBe(0);
    expect(countStudents(undefined, 5)).toBe(0);
    expect(countStudents(null, 5)).toBe(0);
    expect(countStudents({}, 5)).toBe(0);
    expect(countStudents(123, 5)).toBe(0);
    expect(countStudents('123', 5)).toBe(0);
  });

  test('should return correct of count student having avg >= avgMark', () => {
    expect(
      countStudents(
        [
          { id: 1, name: 'Alice', marks: { math: 7 } },
          { id: 2, name: 'Henry', marks: { math: 9 } },
        ],
        6,
      ),
    ).toBe(2);

    expect(
      countStudents(
        [
          { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
          { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
        ],
        7,
      ),
    ).toBe(1);

    expect(
      countStudents(
        [
          { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
          { id: 2, name: 'Bob', marks: { math: 10 } },
        ],
        10,
      ),
    ).toBe(1);
  });
});
