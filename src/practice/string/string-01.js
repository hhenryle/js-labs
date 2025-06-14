export function countWords(str) {
  if (typeof str !== 'string') return 0;

  return str.trim().split(' ').length;
}
