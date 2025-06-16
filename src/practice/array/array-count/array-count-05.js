export function countNumbersNotInB(a, b) {
  if (!Array.isArray(a) || a.length === 0) return 0;
  if (!Array.isArray(b)) return 0;
  if (b.length === 0) return a.length;

  return a.filter((number) => !b.includes(number)).length;
}
