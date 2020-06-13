const arr = ['a', 'b', 'c']
const arc = ['b', 'a', 'c']

console.log(
    `
    arr.sort(): ${arr.sort()}
    arr: ${arr}
    arc.sort(): ${arc.sort()}
    arc: ${arc}
    arr.sort(): ${arr.sort()}
    arc.sort(): ${arc.sort()}
    `
)

console.log(
    `a,b,c.sort() === a,b,c: ${arr.sort() === arr},
b,a,c.sort() == b,a,c: ${arc.sort() == arc},
a,b,c.sort() === b,a,c.sort(): ${arr.sort() === arc.sort()} `
)
console.log(
    `
    arr.sort(): ${arr.sort()}
    arr: ${arr}
    arc.sort(): ${arc.sort()}
    arc: ${arc}
    arr.sort(): ${arr.sort()}
    arc.sort(): ${arc.sort()}
    `
)

const array = [332, 5, 7, 9, 33, 66, 99, 2, 2, 99, 66]
console.log(array.sort((a, b) => a - b))
