function sum(a) {
  return (b) => (c) => a + b + c;
}

const getSum = sum(3)(4);
console.log(getSum(5));
