function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const indexPositiveEven = numberList.findIndex((number) => number % 2 === 0 && number > 0);
  if (indexPositiveEven === -1) return [];
  const firstPositiveEven = numberList[indexPositiveOdd];
  const result = [];

  for (let i = indexPositiveEven + 1; i < numberList.length; i++) {
    const number = numberList[i];
    if (number === firstPositiveEven) result.push(number);
  }

  return result;
}
