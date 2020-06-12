const reverseArray = (arr) => {
  for (i = arr.length - 1; i > 0; i--) {
    for (j = 0; j < i; j++) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
  return arr;
};

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArray(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]

// -------------------------------------------------------------

const reverseArrayInPlace = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};
let arr = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arr));
// parseInt || Math.floor(arr.length / 2) => pegar a parte inteira
