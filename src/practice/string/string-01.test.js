import { countWords } from './string-01';

describe('countWords()', () => {
  test('should return 0 if str is not a string', () => {
    expect(countWords(1)).toBe(0);
    expect(countWords({})).toBe(0);
    expect(countWords([])).toBe(0);
    expect(countWords(null)).toBe(0);
    expect(countWords(undefined)).toBe(0);
  });

  test('should return correct number which quantity of words', () => {
    expect(countWords(' easy frontend easy  ')).toBe(3);
    expect(countWords(' easy')).toBe(1);
    expect(countWords('henry le ')).toBe(2);
  });
});
