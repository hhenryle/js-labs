import { countEmails } from './string-04';

describe('countEmails()', () => {
  test('should return 0 in case str is not a string', () => {
    expect(countEmails({})).toBe(0);
    expect(countEmails([])).toBe(0);
    expect(countEmails(undefined)).toBe(0);
    expect(countEmails(1)).toBe(0);
    expect(countEmails(null)).toBe(0);
  });

  test('should return 0 in case str is empty', () => {
    expect(countEmails('')).toBe(0);
  });

  test('should return 0 in case str doesn not have any email', () => {
    expect(countEmails(' my email should be a@a.com')).toBe(0);
    expect(countEmails(' my email should be @bca.com')).toBe(0);
    expect(countEmails(' my email should be abcs@a.com')).toBe(0);
    expect(countEmails(' my email should be abcs@a.jpt')).toBe(0);
    expect(countEmails(' my email should be @cs@a.jpt')).toBe(0);
  });

  test('should return 0 in case str doesn not have any email', () => {
    expect(countEmails('my email should be abc@super.com')).toBe(1);
    expect(
      countEmails(
        'my email should be easy@frontend.com or easy@frontend.com.vn or easy@frontend.vn',
      ),
    ).toBe(3);
  });
});
