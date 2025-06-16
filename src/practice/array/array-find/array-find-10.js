function findProductByCode(productList, code) {
  if (!Array.isArray(productList) || productList.length === 0) return -1;
  if (typeof code !== 'string') return -1;

  return productList.findIndex((product) => product.code === code);
}

const productList = [
  { id: 1, code: 'ip01', name: 'IPhone 16' },
  { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
];

console.log(findProductByCode(productList, 'ip03'));
