export function findFirstEmail(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return;

  return strList.find((str) => isEmail(str));
}

function isEmail(str) {
  if (typeof str !== 'string') return false;

  if (str.indexOf('@') <= 0 || str.indexOf('@') === str.length - 1) return false;
  const parts = str.split('@');
  if (parts.length !== 2) return false;
  const localPart = parts[0];
  const domainPart = parts[1];

  if (localPart.length < 3) return false;
  const DOMAINS = ['.com', '.vn', '.com.vn'];

  return DOMAINS.some((domain) => {
    const localDomain = domainPart.slice(0, -domain.length);
    return domainPart.endsWith(domain) && localDomain.length >= 3;
  });
}
