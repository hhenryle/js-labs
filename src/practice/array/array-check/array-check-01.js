export function hasEvenNumberGreaterThanN(numberList, n) {
  if (!Array.isArray(numberList) || numberList.length === 0 || typeof n !== 'number') return false;

  return numberList.some((number) => number % 2 === 0 && number > n);
}
