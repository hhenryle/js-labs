export function findLastPerfectSquare(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const reverseNumberList = numberList.reverse();

  return reverseNumberList.find((number) => isPerfectSquare(number));
}

function isPerfectSquare(n) {
  if (n <= 0) return false;

  const sqrtNInt = Math.floor(Math.sqrt(n));

  return sqrtNInt * sqrtNInt === n;
}
