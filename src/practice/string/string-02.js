export function statisticsWords(str) {
  if (typeof str !== 'string' || str === '') return {};

  const statistic = {};
  str
    .split(' ')
    .filter((x) => x !== '')
    .forEach((word) => {
      if (statistic[word]) {
        statistic[word] += 1;
      } else {
        statistic[word] = 1;
      }
    });

  return statistic;
}

export function statisticsWordsV2(str) {
  if (typeof str !== 'string' || str === '') return {};

  return str
    .split(' ')
    .filter((x) => x !== '')
    .reduce((statistics, word) => {
      if (statistics[word]) {
        statistics[word] += 1;
      } else {
        statistics[word] = 1;
      }

      return statistics;
    }, {});
}
