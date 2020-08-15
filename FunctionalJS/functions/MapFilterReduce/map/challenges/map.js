const arr = [1, 2, 4, 6];

const double = (el, idx, arr) => {
  console.log(arr[idx]);
  return el * 2;
};
const doubled = arr.map(double); // double é a função de callback
console.log(doubled);

// -------------------------------------------------

const stock = ['maca', 'uva', 'morango'];
const needItem = ['uva'];

const existsIn = (needItem, stock) => needItem.includes(stock);

const toExistsItem = (needItem) => (stock) => (existsIn(needItem, stock) ? needItem : '');

const findIn = (stock) => (item, toExistsItem) => stock.map(toExistsItem(item));

const findInStock = findIn(stock);

console.log(findInStock(needItem, toExistsItem));
