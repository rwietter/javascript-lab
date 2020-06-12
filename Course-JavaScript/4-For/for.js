let arr = [1, 84, 3, 4, 5, 6, 7];

for (let i = arr.length; i > -1; --i) {
  console.log(arr[i]);
}

console.log("\n");

for (let j = 0; j < arr.length; ++j) {
  if (j > 4) {
    j *= arr.length;
  }
  console.log(j);
}

let a = Math.max(...arr);
console.log(a);
