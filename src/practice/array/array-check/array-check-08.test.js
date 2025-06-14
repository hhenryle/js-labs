import { hasFreeShip } from './array-check-08';

describe('hasFreeShip()', () => {
  test('should return false when productList is not array', () => {
    expect(hasFreeShip({}, 1000000)).toBe(false);
    expect(hasFreeShip('', 1000000)).toBe(false);
    expect(hasFreeShip(123, 1000000)).toBe(false);
    expect(hasFreeShip(undefined, 1000000)).toBe(false);
    expect(hasFreeShip(null, 1000000)).toBe(false);
  });

  test('should return false when productList is a empty array', () => {
    expect(hasFreeShip([], 1000000)).toBe(false);
  });

  test('should return false when price is not a number', () => {
    expect(
      hasFreeShip([{ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 }], '123'),
    ).toBe(false);

    expect(
      hasFreeShip([{ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 }], null),
    ).toBe(false);
    expect(
      hasFreeShip([{ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 }], undefined),
    ).toBe(false);
    expect(
      hasFreeShip([{ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 }], {}),
    ).toBe(false);
    expect(
      hasFreeShip([{ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 }], []),
    ).toBe(false);
  });

  test('should return false when does not have any product that is freeship or price of product > price', () => {
    expect(
      hasFreeShip([{ id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 }], 1000000),
    ).toBe(false);
  });

  test('should return true when has product that is freeship or price of product > price', () => {
    expect(
      hasFreeShip(
        [
          { id: 1, name: 'Iphone 16', isFreeShip: false, price: 10200500 },
          { id: 2, name: 'Iphone 16 Pro Max', isFreeShip: true, price: 1500000 },
        ],
        1000000,
      ),
    ).toBe(true);
  });
});
