import { fillPath } from './string-07';

describe('fillPath()', () => {
  test('should throw error in case path is not a string', () => {
    expect(() => fillPath(123, {})).toThrow('Path is not a string');
    expect(() => fillPath(null, {})).toThrow('Path is not a string');
    expect(() => fillPath(undefined, {})).toThrow('Path is not a string');
    expect(() => fillPath({}, {})).toThrow('Path is not a string');
  });

  test('should throw error in case params is not a object', () => {
    expect(() => fillPath('/products/:productId', 1)).toThrow('Params is not a object');
    expect(() => fillPath('/products/:productId', null)).toThrow('Params is not a object');
    expect(() => fillPath('/products/:productId', undefined)).toThrow('Params is not a object');
    expect(() => fillPath('/products/:productId', [])).toThrow('Params is not a object');
  });

  test('should return correct path which is replace through params', () => {
    expect(
      fillPath('/categories/:categoryId/products/:productId', {
        categoryId: 1,
        productId: 2,
      }),
    ).toBe('/categories/1/products/2');

    expect(
      fillPath('/categories/:categoryId/products/:productId', {
        productId: 2,
      }),
    ).toBe('/categories/:categoryId/products/2');
  });
});
