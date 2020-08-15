function fn(a, b) {
  return a + b;
}

function operation(a) {
  return (b) => (fn) => fn(a, b);
}

const getOperation = operation(1);
const getOperationTwo = getOperation(9);

console.log(getOperationTwo(fn));
