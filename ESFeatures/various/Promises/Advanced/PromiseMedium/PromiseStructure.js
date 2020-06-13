// Criando uma promise
const promise = new Promise((reject, resolve) => {
    try {
        resolve(() => {
            console.log(resolve)
        })
    } catch (e) {
        reject(e)
        console.log(e)
    }
})
// Executando uma promise
promise.then(res => {}).catch(err => {})
// Tratando erros e sucessos no then
promise.then(resolve => {}), err => {}

/*
Como podemos ver, toda a Promise retorna um método then e outro catch , utilizamos o
then para tratar quando queremos resolver a Promise, e o catch quando queremos tratar
os erros de uma Promise rejeitada. Tanto then quanto catch retornam outra Promise e é
isso que permite que façamos o encadeamento de then.then.then .

Para criarmos uma Promise é muito simples, basta inicializar um new Promise que recebe
uma função como parâmetro, esta função tem a assinatura (resolve, reject) => {} , então
podemos realizar nossas tarefas assíncronas no corpo desta função, quando queremos
retornar o resultado final fazemos resolve(resultado) e quando queremos retornar um erro
fazemos reject(erro) .
*/
const newPromise = new Promise((reject, resolver) => {
    setTimeout(resolve('yay'), 5000)
}).then(
    res => {},
    reje => {}
)
// || ambas são a mesma coisa: new => then
new Promise((resolve, reject) => {}).then(
    res => {},
    rej => {}
)
// também pode ser acessada assim: new => then => cath
promise.then(res => {}).catch(rej => {})
