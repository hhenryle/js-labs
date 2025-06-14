import { countURLs } from './string-05';

describe('countURLs()', () => {
  test('should return 0 when str is not a string', () => {
    expect(countURLs(1)).toBe(0);
    expect(countURLs([])).toBe(0);
    expect(countURLs({})).toBe(0);
    expect(countURLs(undefined)).toBe(0);
    expect(countURLs(null)).toBe(0);
  });

  test('should return 0 when str is empty string', () => {
    expect(countURLs('')).toBe(0);
  });

  test('should return 0 when str does not have any correct urls', () => {
    expect(countURLs('my website is: https://ez.com you can visit it')).toBe(0);
    expect(countURLs('   my website is: ass://easyfrontend.com you can visit it')).toBe(0);
    expect(countURLs('my website is: ass://easyfrontend.haha/hoc-js you can visit it')).toBe(0);
  });

  test('should return correct number when str has correct urls', () => {
    expect(countURLs('my website is: http://ezfrontend.com you can visit it')).toBe(1);
    expect(countURLs('   my website is: http://ezfrontend.com/hoc-js  you can visit it')).toBe(1);
    expect(
      countURLs('my website is: https://ezfrontend.com.vn/hoc-js/cho-nguoi-moi  you can visit it'),
    ).toBe(1);
  });
});
