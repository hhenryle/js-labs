export function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const reverseNumberList = numberList.reverse();

  return reverseNumberList.find((number) => number < 0 && number % 2 !== 0);
}

export function findLastNegativeOddV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let negativeOddNumber = undefined;

  numberList.forEach((number) => {
    if (number < 0 && number % 2 !== 0) {
      negativeOddNumber = number;
    }
  });

  return negativeOddNumber;
}
