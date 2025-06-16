import { countWords } from './array-count-03';

describe('countWords', () => {
  test('should return 0 if wordList is empty', () => {
    expect(countWords([], 2)).toBe(0);
    expect(countWords(undefined, 2)).toBe(0);
    expect(countWords('', 2)).toBe(0);
    expect(countWords({}, 2)).toBe(0);
    expect(countWords(123, 2)).toBe(0);
    expect(countWords(null, 2)).toBe(0);
  });

  test('should return 0 if wordList doesn not have length of word >= n', () => {
    expect(countWords(['easy', 'frontend'], 10)).toBe(0);
  });

  test('should return correct number if wordList having length of word >= n', () => {
    expect(countWords(['easy', 'frontend'], 1)).toBe(2);
    expect(countWords(['easy', 'frontend'], 5)).toBe(1);
  });
});
