export function countEmails(str) {
  if (typeof str !== 'string' || str === '') return 0;

  const arrWords = str.split(' ').filter((x) => x != '' && isValidEmail(x));

  return arrWords.length;
}

function isValidEmail(word) {
  if (typeof word !== 'string') return false;
  if (word.indexOf('@') <= 0 || word.indexOf('@') === word.length - 1) return false;

  const parts = word.split('@');
  if (parts.length !== 2) return false;
  const localPart = parts[0];
  const domainPart = parts[1];

  if (localPart.length < 3) return false;
  const DOMAINS = ['.com', '.vn', '.com.vn'];
  const hasEndWithDomain = DOMAINS.some(
    (domain) => domainPart.endsWith(domain) && domainPart.slice(0, -domain.length).length >= 3,
  );

  return hasEndWithDomain;
}
