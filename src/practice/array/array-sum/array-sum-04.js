export function calcCartTotal(cardItemList) {
  if (!Array.isArray(cardItemList) || cardItemList.length === 0) return 0;

  return cardItemList.reduce(
    (sum, item) => sum + (item.product?.price || 0) * (item.quantity || 0),
    0,
  );
}

export function calcCartTotalV2(cardItemList) {
  if (!Array.isArray(cardItemList) || cardItemList.length === 0) return 0;

  let sum = 0;

  for (let i = 0; i < cardItemList.length; i++) {
    const cardItem = cardItemList[i];
    const itemTotal = cardItem.product.price * cardItem.quantity;

    sum += itemTotal;
  }

  return sum;
}
