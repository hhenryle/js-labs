function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter((number) => {
    const firstDigit = Number.parseInt(Math.abs(number).toString().charAt(0));
    return firstDigit % 2 !== 0;
  });
}
