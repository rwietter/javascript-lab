const arr = [1, 2, 3, 4, 5, 6, 7]

const newArr = arr.map((item, index) => {
  return item * index
})
console.log(newArr)
