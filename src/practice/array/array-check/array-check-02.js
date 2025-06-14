export function hasOddNumberDivisibleBy3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  return numberList.some((number) => number % 2 !== 0 && number % 3 === 0);
}
