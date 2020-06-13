/*
- baseado em uma promise
*/
const fs = require('fs')

const init = async () => {}
console.log(init())

// --------------------------------------------------------------
/*
- chamar o callback e resolver a promise com try/catch/async/await
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

const promiseAsyncAwait = async () => {
    try {
        const contents = await readFile('./text1.md')
        return contents
    } catch (e) {
        console.log(e)
    }
}
promiseAsyncAwait()
    .then(resolve => {
        console.log(String(resolve))
    })
    .catch(err => {
        // console.log(err)
    })
