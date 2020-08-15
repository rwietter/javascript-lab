// return functions to variables
function getBits(value) {
  return (base) => Math.pow(value, base);
}

const base = getBits(2);

console.log(`bits is ${base(8)}`);
