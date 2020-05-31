const carrinho = [
  { name: 'Caneta', size: 10, price: 7.99 },
  { name: 'Impressora', size: 0, price: 649.5 },
  { name: 'Caderno', size: 4, price: 27.1 },
  { name: 'Lapis', size: 3, price: 5.82 },
  { name: 'esoura', size: 1, price: 19.2 },
];

Array.prototype.filterray = function (isMaxZero) {
  let carr = [];
  for (let product of carrinho) {
    if (isMaxZero(product)) {
      carr.push(product);
    }
  }
  return carr;
};
Array.prototype.maprray = function (multiplyPrice) {
  let carr = [];
  for (let product of carrinho) {
    carr.push(multiplyPrice(product));
  }
  return carr;
};
Array.prototype.reducerray = function (sum, initial) {
  let ultimo = initial;
  for (const product of this) {
    if (ultimo === undefined) {
      ultimo = product;
      continue;
    }
    ultimo = sum(ultimo, product);
  }
  return ultimo;
};

const isMaxZero = (item) => item.size > 0;
const parsePrice = ({ size, price }) => size * price;
const sum = (a, b) => a + b;

filtered = carrinho.filterray(isMaxZero).maprray(parsePrice).reducerray(sum);
console.log(filtered);
