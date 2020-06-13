const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const test = value => value > 5 || value == 5

const copy = arr.filter(test)

console.log(copy)
