import { statisticsCharacters } from './string-03';

describe('statisticsCharacters', () => {
  test('should return empty object when str is not a string', () => {
    expect(statisticsCharacters(1)).toEqual({});
    expect(statisticsCharacters({})).toEqual({});
    expect(statisticsCharacters([])).toEqual({});
    expect(statisticsCharacters(undefined)).toEqual({});
    expect(statisticsCharacters(null)).toEqual({});
  });

  test('should return empty object when str is empty', () => {
    expect(statisticsCharacters('')).toEqual({});
  });

  test('should return correct statistics characters', () => {
    expect(statisticsCharacters('aa b cc ')).toEqual({ a: 2, b: 1, c: 2, space: 3 });
    expect(statisticsCharacters('  henry  le ')).toEqual({
      h: 1,
      e: 2,
      n: 1,
      r: 1,
      y: 1,
      l: 1,
      space: 5,
    });
  });
});
