const arr = [0, 3, 5, 6, 8, 1, 2, -20]
function greatestNumber(arr) {
    let greatest = 0
    for (let i = 0; i < arr.length; i++) {
        if (greatest < arr[i]) greatest = arr[i]
    }
    return greatest
}
console.log(greatestNumber(arr)) // 8
