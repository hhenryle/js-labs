import { countNumbersNotInB } from './array-count-05';

describe('countNumbersNotInB()', () => {
  test('should return 0 if arr A and arr B are not array', () => {
    expect(countNumbersNotInB(undefined, [1, 2, 3])).toBe(0);
    expect(countNumbersNotInB('123', [1, 2, 3])).toBe(0);
    expect(countNumbersNotInB(123, [1, 2, 3])).toBe(0);
    expect(countNumbersNotInB({}, [1, 2, 3])).toBe(0);
    expect(countNumbersNotInB(null, [1, 2, 3])).toBe(0);

    expect(countNumbersNotInB([1, 2, 3], '123')).toBe(0);
    expect(countNumbersNotInB([1, 2, 3], undefined)).toBe(0);
    expect(countNumbersNotInB([1, 2, 3], 123)).toBe(0);
    expect(countNumbersNotInB([1, 2, 3], {})).toBe(0);
    expect(countNumbersNotInB([1, 2, 3], null)).toBe(0);
  });

  test('should 0 when arr A and arr b are the same', () => {
    expect(countNumbersNotInB([], [])).toBe(0);
    expect(countNumbersNotInB([1, 2, 3], [1, 2, 3])).toBe(0);
  });

  test('should 0 when arr A is a empty arr and arr B is not empty arr', () => {
    expect(countNumbersNotInB([], [1, 2, 3])).toBe(0);
  });

  test('should length of arr A when arr A is not empty arr and arr B is empty arr', () => {
    expect(countNumbersNotInB([1, 2, 3], [])).toBe(3);
  });

  test('should correct count of  correct number includes arrA not includes arrB', () => {
    expect(countNumbersNotInB([1, 2, 3], [4, 5])).toBe(3);
    expect(countNumbersNotInB([1, 2, 3], [3, 4, 5])).toBe(2);
  });
});
