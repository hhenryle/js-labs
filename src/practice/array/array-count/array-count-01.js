export function countPositiveEvenNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.filter((number) => number > 0 && number % 2 === 0).length;
}
