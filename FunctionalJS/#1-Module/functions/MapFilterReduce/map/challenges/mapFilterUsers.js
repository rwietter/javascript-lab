const card = [
  { name: 'Pen', qtd: 10, price: 7.99 },
  { name: 'Printer', qtd: 0, price: 649.50 },
  { name: 'Caderno', qtd: 4, price: 27.10 },
  { name: 'Pen tool', qtd: 3, price: 5.82 },
  { name: 'Tesoura', qtd: 1, price: 19.20 },
];

// get all products names
const product = (item) => item.name; // [ 'Pen', 'Printer', 'Caderno', 'Pen tool', 'Tesoura' ]
const totalProductValue = ({ name, qtd, price }) => ({ name, price: qtd * price });
const mapProducts = (card) => () => card.map(totalProductValue);
const newProduct = mapProducts(card);
console.log(newProduct());
