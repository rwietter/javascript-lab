let mathPromiseResolve = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve('yes\n') : reject('no\n')
})
mathPromiseResolve.then(console.log).catch(console.error) // yes || no

// |||
const mathPromiseResolveVarious = new Promise((resolve, reject) => {
    Math.random() > 0.5 ? resolve('SUCESS') : reject('ERRORR')
})
mathPromiseResolveVarious
    .then(function acao1(res) {
        console.log(`${res} da ação 1`)
        return res
    })
    .catch(function erro1(err) {
        console.error('Primeiro catch')
        //return err
        // continua a execução das promises => throw interrompe o fluxo
        throw `THROW CATCH ERRRRORRR`
    })
    .then(function acao2(res) {
        console.log(`${res} da ação 2`)
        return res
    })
    .then(function acao3(res) {
        console.log(`${res} da ação 3`)
        return res
    })
    .catch(function erro(rej) {
        console.log(`${rej}`)
    })
// new => acao1 => acao2 => acao3 => erro
// new => erro
/*
    Em um fluxo de sucesso vamos ter todas as ações executadas e o nosso
    catch contabilizado mas não executado, nossa saída seria algo assim:
    yes da ação 1
    yes da ação 2
    yes da ação 3
*/
/*
    O que aconteceu aqui? Nosso catch erro1 foi executado, mas parece que todo
    o resto do fluxo seguiu normalmente! Lembre-se que "jogar" um erro é diferente
    de rejeitar uma Promise. O throw irá parar a execução do sistema, mas um reject
    irá manter o sistema sendo executado, por esta razão é possível ter múltiplos
    catch em uma Promise. Cada catch irá capturar o erro relativo às Promises anteriores,
    uma vez capturado, o valor que ele retornar será passado para a próxima Promise
    que executará normalmente.
*/
