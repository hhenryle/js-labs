export function countURLs(str) {
  if (typeof str !== 'string') return 0;

  const urlList = str.split(' ').filter((x) => x !== '' && isValidURL(x));

  return urlList.length;
}

function isValidURL(url) {
  if (!url.includes('://')) return false;

  const DOMAINS = ['.com', '.com.vn', '.vn'];
  const PROTOCALS = ['http', 'https', 'ws', 'wss'];

  const partOfUrl = url.split('://');
  const protocalPart = partOfUrl[0];
  const domainPart = partOfUrl[1].includes('/')
    ? partOfUrl[1].slice(0, partOfUrl[1].indexOf('/'))
    : partOfUrl[1];

  if (!PROTOCALS.includes(protocalPart)) return false;
  const hasValidDomain = DOMAINS.some(
    (domain) => domainPart.endsWith(domain) && domainPart.slice(0, -domain.length - 1).length >= 3,
  );

  if (!hasValidDomain) return false;

  return true;
}
