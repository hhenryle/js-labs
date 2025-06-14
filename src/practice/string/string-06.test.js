import { getDisplayedAddress } from './string-06';

describe('getDisplayedAddress', () => {
  test('should return empty string when address is not a object', () => {
    expect(getDisplayedAddress([])).toBe('');
    expect(getDisplayedAddress(1)).toBe('');
    expect(getDisplayedAddress('')).toBe('');
    expect(getDisplayedAddress(undefined)).toBe('');
    expect(getDisplayedAddress(null)).toBe('');
  });

  test('should return empty string when address is empty object', () => {
    expect(getDisplayedAddress({})).toBe('');
  });

  test('should return empty string when address does not have correct key', () => {
    const address = {
      id: '1',
      nane: 'Henry Le',
    };
    expect(getDisplayedAddress(address)).toBe('');
  });

  test('should return correct string address', () => {
    const address = {
      number: 123,
      street: 'Nguyen Cong Tru',
      ward: 'Ward 11',
      district: 'Binh Thanh District',
      city: 'HCMC',
    };
    expect(getDisplayedAddress(address)).toBe(
      '123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC',
    );

    const address2 = {
      district: 'Binh Thanh District',
      street: 'Nguyen Cong Tru',
      name: 'Henry',
    };
    expect(getDisplayedAddress(address2)).toBe('Nguyen Cong Tru, Binh Thanh District');
  });
});
