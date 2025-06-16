function findAllProducts(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return [];

  return productList.filter((product) => product.isFreeShip);
}

const productList = [
  { id: 1, name: 'iphone X', isFreeShip: true },
  { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
  { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
];
console.log(findAllProducts(productList));
