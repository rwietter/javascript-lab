const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const add = value => value + 1

const res = arr.map(add) // [(2, 3, 4, 5, 6, 7, 8, 9, 10)]

console.log(res)

// => map faz uma cópia do array original
