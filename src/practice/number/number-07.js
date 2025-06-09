export function isSymetricNumber(n) {
  if (n <= 1 || n >= 1000000) return false;
  if (n.toString().length === 1) return true;

  const numberString = n.toString();

  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] !== numberString[numberString.length - 1 - i]) return false;
  }

  return true;
}

export function isSymetricNumberV2(n) {
  if (n <= 1 || n >= 1000000) return false;
  if (n.toString().length === 1) return true;

  const numberString = n.toString();
  const revertNumberString = numberString.split('').reverse().join('');

  return numberString === revertNumberString;
}
