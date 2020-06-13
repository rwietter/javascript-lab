const arr = [1, 2, 3, 4, 5, 6, 7]

const filter = arr.filter(item => {
  return item % 2 == 0
})
console.log(filter)

// filter só retorna true ou false
