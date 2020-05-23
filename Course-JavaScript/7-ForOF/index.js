// + ---------------------------------------------- +
// +            for of
// + for of => lê o array e intera valores
// + for of => não itera sobre objetos => utilizar forEach or for in
// + ---------------------------------------------- +
let listFruits = [['Banana', 'mamão', 'laranja'], ['Maça', 'Melancia', 'Abacaxi']]
  
const forOf = () => {
  console.log('\n');
  for (let value of listFruits) {
    console.log(value);
  }
}
forOf(listFruits)
