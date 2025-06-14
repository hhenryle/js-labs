export function getDisplayedAddress(address) {
  if (typeof address !== 'object' || address === null) return '';

  const parts = [];
  if (address.number && address.street) parts.push(`${address.number} ${address.street}`);
  if (address.number && !address.street) parts.push(address.number);
  if (!address.number && address.street) parts.push(address.street);

  if (address.ward) parts.push(address.ward);

  if (address.district) parts.push(address.district);

  if (address.city) parts.push(address.city);

  return parts.join(', ');
}
