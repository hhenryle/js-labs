// Implement filter function in Array

function filter(arr, callbackFn) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') return undefined;

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (callbackFn(element, i)) newArray.push(element);
  }

  return newArray;
}
