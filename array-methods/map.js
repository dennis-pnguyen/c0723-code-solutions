const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const pricesObject = prices.map((originalNumber) => {
  return { price: originalNumber, salePrice: originalNumber / 2 };
});

const formattedPrices = prices.map((price) => {
  return '$' + price.toFixed(2);
});
