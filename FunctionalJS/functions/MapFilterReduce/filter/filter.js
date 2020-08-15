// eslint-disable-next-line no-extend-native
Array.prototype.myFilter = function (fn) {
  const data = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      data.push(this[i]);
    }
  }
  return data;
};

const arr = [1, 5, 5, 7, 8, 9];
const fn = (n) => n > 5;
const res = arr.myFilter(fn);
console.log(res);
