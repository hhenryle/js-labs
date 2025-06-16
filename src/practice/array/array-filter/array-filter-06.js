function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter((number) => {
    const firstDigit = Number(Math.abs(number).toString()[0]);
    return firstDigit % 2 !== 0;
  });
}
