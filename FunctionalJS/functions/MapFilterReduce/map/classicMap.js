const arr = [1, 5, 6, 7];

// eslint-disable-next-line no-extend-native
Array.prototype.classicMap = function (fn) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const element = fn(this[i], i, this);
    newArray.push(element);
  }
  return newArray;
};

arr.classicMap((item, i, arr) => console.log(`item: ${item}, i: ${i}, arr: ${arr}`));
