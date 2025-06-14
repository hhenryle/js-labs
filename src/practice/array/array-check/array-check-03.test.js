import { hasEasyFrontend } from './array-check-03';

describe('hasEasyFrontend()', () => {
  test('should return false when wordList is not array', () => {
    expect(hasEasyFrontend('')).toBe(false);
    expect(hasEasyFrontend({})).toBe(false);
    expect(hasEasyFrontend(1)).toBe(false);
    expect(hasEasyFrontend(undefined)).toBe(false);
    expect(hasEasyFrontend(null)).toBe(false);
  });

  test('should return false when wordList is a empty array', () => {
    expect(hasEasyFrontend([])).toBe(false);
  });

  test('should false when wordList does not have any word is easy, frontend or easy frontend', () => {
    expect(hasEasyFrontend(['easy', '', 'henry'])).toBe(false);
    expect(hasEasyFrontend(['frontend', '', 'frontend'])).toBe(false);
    expect(hasEasyFrontend(['henry', '', 'javascript'])).toBe(false);
  });

  test('should true when wordList has word is easy, frontend or easy frontend', () => {
    expect(hasEasyFrontend(['easy', '', 'frontend'])).toBe(true);
    expect(hasEasyFrontend(['frontend', 'henry', 'easy frontend'])).toBe(true);
  });
});
