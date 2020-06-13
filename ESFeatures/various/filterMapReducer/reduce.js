const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const res = (arr, acc) => acc * arr
const copy = arr.reduce(res, 1)
console.log(copy)

//¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨

const array = [1, 2, 3, 4, 5, 6, 7, 8]
const reduce = array.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentValue
  }
)
console.log(reduce)
