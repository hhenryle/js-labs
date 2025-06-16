function findProductHavingFreeShip(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return;

  return productList.find((product) => product.isFreeShip);
}

const productList = [
  { id: 1, name: 'IPhone 5', isFreeShip: false },
  { id: 2, name: 'IPhone X', isFreeShip: true },
  { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
];
console.log(findProductHavingFreeShip(productList));
