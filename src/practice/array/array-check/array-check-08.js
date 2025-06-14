export function hasFreeShip(productList, price) {
  if (!Array.isArray(productList) || productList.length === 0) return false;
  if (typeof price !== 'number') return false;

  return productList.some((product) => product['isFreeShip'] && product['price'] > price);
}
