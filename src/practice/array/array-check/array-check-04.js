export function hasTruthy(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return false;

  return arr.some((element) => Boolean(element));
}
