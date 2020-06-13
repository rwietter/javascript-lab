function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    j++;
    array[j] = temp;
  }
  return array;
}

(function getInsertionSort() {
  let randomArray = [];
  for (i = 0; i < 6; i++) {
    randomArray[i] = Math.floor(Math.random() * 900);
  }

  console.log(randomArray);

  const getResultArrayInsertionSort = insertionSort(randomArray);
  console.log(getResultArrayInsertionSort);
})();
