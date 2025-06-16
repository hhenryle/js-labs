export function countWords(wordList, n) {
  if (!Array.isArray(wordList) || wordList.length === 0) return 0;

  return wordList.filter((word) => word.length >= n).length;
}
