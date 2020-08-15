const arr = ['thick scales', '80', '4 foot tail', 'rounded snout']
const fun = arr => {
  console.log(arr.includes('thick scales')) // true
  console.log(arr.includes('4 foot tail', 2)) // true
}

// Syntax
console.log(arr.includes(80, [1])) // false => strict mode

// find
console.log(arr.find(el => el == 80))
arr.find(el => el.length < 12) // returns '4 foot tail'

/*
 * The .includes() method returns a boolean value and is perfect for
 * telling you whether an element exists in an array or not.
 *
 * Now, there are a few important things to notice. This .includes() method uses strict comparison.
 */
