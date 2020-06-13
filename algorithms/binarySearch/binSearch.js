function array() {
  let arr = Array(10);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
  }
  const size = arr.length;
  selectSort(arr, size);
}

function insertSort(arr, size) {
  let [i, j, key] = [0, 0, 0];
  while (i < size) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
    i++;
  }
  console.log(binSearch(arr, 0, size, 14));
  console.log(arr);
}

function selectSort(arr, size) {
  let [i, j, aux, minIndex] = [0, 0, 0, 0];
  for (i = 0; i < size - 1; i++) {
    minIndex = i;
    for (j = i; j < size; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    aux = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = aux;
  }
  console.log(binSearch(arr, 0, size, 14));
  console.log(arr);
}

function binSearch(arr, left, right, value) {
  debugger;
  if (right >= left) {
    const index = parseInt(left + (right - left) / 2); // divide o arr ao meio
    if (arr[index] === value) {
      return value;
    }
    if (arr[index] > value) {
      return binSearch(arr, left, index - 1, value);
    }
    return binSearch(arr, index + 1, right, value);
  }
  return -1;
}

array();
