const mutSortNumbers = (arr) => arr.sort((a, b) => a - b);

// mutabilidade

const numbers = [3, 7, 2, 9, 3, 1];
console.log('original: ', numbers);
mutSortNumbers(numbers);
console.log('sorted: ', numbers);

// Imutabilidade

const imutSortNumbers = ([...arr]) => arr.sort((a, b) => a - b);
const nums = [3, 7, 2, 9, 3, 1];
console.log('original: ', nums);
const res = imutSortNumbers(numbers);
console.log('imutabilidade: ', nums);
console.log('sorted: ', res);
