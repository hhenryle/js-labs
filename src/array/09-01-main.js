// Implement find function in Array

function find(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackFn(element, i)) return element;
  }

  return undefined;
}
