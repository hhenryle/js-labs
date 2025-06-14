export function isIncreasingNumberList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] >= numberList[i + 1]) return false;
  }

  return true;
}
