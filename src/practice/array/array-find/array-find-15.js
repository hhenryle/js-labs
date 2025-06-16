function findFirstIPhone(productList) {
  if (!Array.isArray(productList) || productList.length === 0) return;

  return productList.find((product) => product.name.toLowerCase().startsWith('iphone'));
}

const productList = [
  { id: 1, name: 'Samsung' },
  { id: 2, name: 'IPHONE X' },
  { id: 3, name: 'iPhone 12 Pro' },
];
