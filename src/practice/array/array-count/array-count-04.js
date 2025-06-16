// P1: add unique numbers to a new array --> length
// export function countUniqueNumbers(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) return 0;

//   const uniqueNumberList = [];
//   numberList.forEach((number) => {
//     if (!uniqueNumberList.includes(number)) uniqueNumberList.push(number);
//   });

//   return uniqueNumberList.length;
// }

// P2: using object map --> keys of object
export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const flag = {};
  numberList.forEach((number) => {
    flag[number] = true;
  });

  return Object.keys(flag).length;
}

// P3 using reduce
export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const flag = numberList.reduce((flag, number) => {
    flag[number] = true;
    return flag;
  }, {});

  return Object.keys(flag).length;
}
