const mySet = new Set([{ a: 1 }, { a: 1 }])
const result = [...mySet]
console.log(result)

const doubleSet = new Set([
    {
        a: 1,
        a: 1,
    },
])
const r = [...doubleSet]
console.log(r)

// - Set em diferentes objects remove duplicatas

/*
    While it's true a Set object will remove duplicates, the two values we
    create our Set with are references to different objects in memory, despite
    having identical key-value pairs. This is the same reason { a: 1 } === { a: 1 } is false.
*/

const arr = [...new Set([3, 1, 2, 3, 4])]
console.log(arr.length, arr[2], arr)
// - remove primeira duplicata
