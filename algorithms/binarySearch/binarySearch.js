const arr = [5, 6, 7, 2, 1, 4, 9, 7, 3, 2].sort();

function binarySearch(arr, item) {
  let first = 0;
  let last = arr.length - 1;
  let found = false;

  while (first <= last && !found) {
    middle = Math.ceil((first + last) / 2);
    if (arr[middle] == item) {
      found = true;
    } else {
      if (item < arr[middle]) {
        last = middle - 1;
      } else {
        first = middle + 1;
      }
    }
  }
  return found;
}

console.log(binarySearch(arr, 7));
