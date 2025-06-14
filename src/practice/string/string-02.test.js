import { statisticsWords, statisticsWordsV2 } from './string-02';

describe('statisticsWords()', () => {
  test('should return empty object when str is not a tring', () => {
    expect(statisticsWords({})).toEqual({});
    expect(statisticsWords(1)).toEqual({});
    expect(statisticsWords([])).toEqual({});
    expect(statisticsWords(undefined)).toEqual({});
    expect(statisticsWords(null)).toEqual({});
  });

  test('should return empty object when str is empty', () => {
    expect(statisticsWords('')).toEqual({});
  });

  test('should return correct statistics', () => {
    expect(statisticsWords('easy frontend is every easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      every: 1,
    });
  });

  test('should return correct statistics when str has redundant spaces', () => {
    expect(statisticsWords('  easy frontend  ')).toEqual({ easy: 1, frontend: 1 });
    expect(statisticsWords('  easy frontend     is       every easy     ')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      every: 1,
    });
  });
});

describe('statisticsWordsV2()', () => {
  test('should return empty object when str is not a tring', () => {
    expect(statisticsWordsV2({})).toEqual({});
    expect(statisticsWordsV2(1)).toEqual({});
    expect(statisticsWordsV2([])).toEqual({});
    expect(statisticsWordsV2(undefined)).toEqual({});
    expect(statisticsWordsV2(null)).toEqual({});
  });

  test('should return empty object when str is empty', () => {
    expect(statisticsWordsV2('')).toEqual({});
  });

  test('should return correct statistics', () => {
    expect(statisticsWordsV2('easy frontend is every easy')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      every: 1,
    });
  });

  test('should return correct statistics when str has redundant spaces', () => {
    expect(statisticsWordsV2('  easy frontend  ')).toEqual({ easy: 1, frontend: 1 });
    expect(statisticsWordsV2('  easy frontend     is       every easy     ')).toEqual({
      easy: 2,
      frontend: 1,
      is: 1,
      every: 1,
    });
  });
});
