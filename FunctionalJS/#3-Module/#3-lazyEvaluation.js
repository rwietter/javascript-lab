const lazyEvaluation = (arr) => () => [...arr].sort((a, b) => a - b);
const notLazy = (arr) => [...arr].sort((a, b) => a - b);

console.log(lazyEvaluation);
console.log(notLazy);
