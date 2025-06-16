function findLastUrl(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return;

  const revertStrList = strList.reverse();

  return revertStrList.find((str) => isValidUrl(str));
}

function isValidUrl(str) {
  if (typeof str !== 'string') return false;
  if (!str.includes('://')) return false;

  const PROTOCOLS = ['http', 'https', 'ws', 'wss'];
  const DOMAINS = ['.com', '.com.vn', '.vn'];
  const parts = str.split('://');
  if (parts.length !== 2) return false;
  const protocolPart = parts[0];
  const domainPart = parts[1].includes('/') ? parts[1].slice(0, parts[1].indexOf('/')) : parts[1];

  if (!PROTOCOLS.includes(protocolPart)) return false;

  return DOMAINS.some(
    (domain) => domainPart.endsWith(domain) && domainPart.slice(0, -domain.length).length >= 3,
  );
}

console.log(findLastUrl(['https://google.com', 'wss://chat.sample.com']));
