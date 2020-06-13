const fs = require('fs')

/*
 - Promise passa um callback;
 - Promise retorna um valor imediatamente, futuramente, podemos passar um resolver e um reject
*/
const readFile = file =>
    new Promise((resolve, reject) => {
        fs.readFile(file, (err, contents) => {
            if (err) {
                reject(err)
            } else {
                resolve(contents)
            }
        })
    })
readFile('./text1.md')
    .then(contents => {
        console.log(String(contents))
        return readFile('./text2.md')
    })
    .then(contents => {
        console.log(String(contents))
    })
    .catch(err => {
        console.log(err)
    })
