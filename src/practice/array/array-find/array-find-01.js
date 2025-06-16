export function findMinPositive(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  const positiveNumberList = numberList.filter((number) => number > 0);
  if (positiveNumberList.length === 0) return undefined;

  return positiveNumberList.reduce((min, number) => (number < min ? number : min));
}
