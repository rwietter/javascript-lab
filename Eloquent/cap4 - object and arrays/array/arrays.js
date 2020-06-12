let todo = [];

const remeber = (task) => {
  todo.push(task); // add no início
};

const getTodo = () => {
  return todo;
};

const remeberUrgently = (task) => {
  todo.unshift(task); // add início
};

const shiftInitial = () => {
  todo.shift(); // remove início
};

const removeTask = () => {
  todo.pop(); // remove no final
};

const indexOf = (index) => {
  return todo.indexOf(index);
};

const lastIndexOf = (index) => {
  return todo.lastIndexOf(index);
};

const slice = (x, y) => {
  return todo.slice(x, y);
};

remeber("Coffe");
remeber("Study");
remeber("Work");
remeber("Launch");
remeber("break");
remeberUrgently("New");
console.log(getTodo()); // [ 'New', 'Coffe', 'Study', 'Work', 'Launch', 'break' ]

shiftInitial();
console.log(getTodo()); // [ 'Coffe', 'Study', 'Work', 'Launch', 'break' ]

removeTask();
console.log(getTodo()); // [ 'Coffe', 'Study', 'Work', 'Launch' ]

console.log(indexOf("Coffe")); // 0 : returna o index de onde se encontra o valor a partir do primeiro index.

console.log(lastIndexOf("Work")); // 1 : returna o index de onde se encontra o valor a partir do último index.

console.log(slice(1, 3)); // retorn os valores do array nos índice específicados:  >= x < y or >= x

let a = [1, 2, 3, 4, 5];
let b = [6, 7, 8, 9];

// slice + concat
const sliceConcat = () => {
  return a.slice(0, 3).concat(b);
};
console.log(sliceConcat());
