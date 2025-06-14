export function statisticsCharacters(str) {
  if (typeof str !== 'string' || str === '') return {};

  const statistics = {};
  str.split('').forEach((char) => {
    if (char === ' ') {
      statistics['space'] = (statistics['space'] || 0) + 1;
    } else {
      statistics[char] = (statistics[char] || 0) + 1;
    }
  });
  return statistics;
}

console.log('aa b cc '.split(''));
