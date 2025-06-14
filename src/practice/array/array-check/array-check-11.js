export function isSymmetricList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] !== numberList[numberList.length - 1 - i]) return false;
  }

  return true;
}

export function isSymmetricListV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return false;

  for (let i = 0; i <= numberList.length / 2; i++) {
    if (numberList[i] !== numberList[numberList.length - 1 - i]) return false;
  }

  return true;
}
