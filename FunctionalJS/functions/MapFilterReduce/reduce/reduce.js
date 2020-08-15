const card = [
  { name: 'Pen', qtd: 10, price: 7.99 },
  { name: 'Printer', qtd: 0, price: 649.5 },
  { name: 'Caderno', qtd: 4, price: 27.1 },
  { name: 'Pen tool', qtd: 3, price: 5.82 },
  { name: 'Tesoura', qtd: 1, price: 19.2 },
];

const totalProductsValues = (acc, el) => {
  return { name: acc.name, price: acc.qtd * acc.price };
};

const totalProductValue = (acc, el) => acc + el.price;

const filteredPriceProducts = card
  .map(totalProductsValues)
  .reduce(totalProductValue, 0);

console.log(filteredPriceProducts);
