Array.prototype.reducer = function (fn, initial) {
  let acc = initial;
  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue;
    }
    acc = fn(acc, this[i], i, this);
  }
  return acc;
};

const arr = [14, 5, 7, 8, 4, 4];
const data = arr.reducer((acc, cur, idx, arr) => {
  return acc + cur;
}, []);
console.log(data);
