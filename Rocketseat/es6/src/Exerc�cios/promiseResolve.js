// EXERCÍCIOS
// 1:
/*
Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000))
function umPorSegundo() {
  delay().then(() => {
    console.log('1s')
    delay().then(() => {
      console.log('2s')
      delay().then(() => {
        console.log('3s')
      })
    })
  })
}
umPorSegundo()
*/

const delay = timeResponse =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(timeResponse)
    }, 1000)
  })

export default async function umPorSegundo() {
  try {
    console.log(await delay('1s'))
    console.log(await delay('2s'))
    console.log(await delay('3s'))
  } catch (e) {
    console.log(e)
  }
}
