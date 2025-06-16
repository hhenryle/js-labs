import { findLongestWord } from './array-find-02';

describe('findLongestWord()', () => {
  test('should return empty string if wordList is not array', () => {
    expect(findLongestWord('')).toBe('');
    expect(findLongestWord(null)).toBe('');
    expect(findLongestWord(undefined)).toBe('');
    expect(findLongestWord(1)).toBe('');
    expect(findLongestWord({})).toBe('');
  });

  test('should return empty string when wordList is an empty array', () => {
    expect(findLongestWord([])).toBe('');
  });

  test('should return empty string when wordList does not have str that length <= 5 or includes spaces', () => {
    expect(findLongestWord(['superman', 'coolmate'])).toBe('');
    expect(findLongestWord(['super cool', 'data engineer '])).toBe('');
  });

  test('should return correct string', () => {
    expect(findLongestWord(['super', 'cool'])).toBe('super');
    expect(findLongestWord(['coolmate', 'super', 'super cool'])).toBe('super');
  });
});
