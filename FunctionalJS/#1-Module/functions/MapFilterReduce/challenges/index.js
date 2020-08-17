const card = [
  { name: 'Pen', amount: 10, price: 7.99, isStock: true },
  { name: 'Printer', amount: 1, price: 649.5, isStock: true },
  { name: 'Notebook', amount: 4, price: 27.1, isStock: false },
  { name: 'Pen tool', amount: 3, price: 5.82, isStock: false },
  { name: 'Scissors', amount: 1, price: 19.2, isStock: true },
];

const filterIsStock = (element, idx, arr) => element.isStock;
const totalProductsValue = (actual, idx, arr) => actual.amount * actual.price;
const averageTotalProductsValue = (acc, cur, idx, arr) => {
  const amount = acc.amount + 1;
  const total = acc.total + cur;
  return { amount, total, average: total / amount };
};

const average = card
  .filter(filterIsStock)
  .map(totalProductsValue)
  .reduce(averageTotalProductsValue, { amount: 0, total: 0, average: 0 });

console.log(average);
