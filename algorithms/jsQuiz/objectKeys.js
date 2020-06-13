const obj = {
    1: 1,
    2: 2,
    3: 3,
}
// É Object.keysigual a Object.values?

console.log(Object.keys(obj) == Object.values(obj))
console.log(obj) // {'1': 1, '2': 2, '3': 3}

// Nesse caso, Object.keysconverte as chaves em string ["1", "2", "3"]e Object.valuesfornece [1, 2, 3].
