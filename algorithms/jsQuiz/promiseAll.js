const timer = a => {
    return new Promise(res =>
        setTimeout(() => {
            res(a)
        }, Math.random() * 1000)
    )
}

const all = Promise.all([timer('first'), timer('second')]).then(data =>
    console.log(data)
)
console.log(all)

/*
- A ordem na qual as Promessas resolvem não importa Promise.all. Podemos contar
- com segurança para que eles sejam retornados na mesma ordem em que foram fornecidos no argumento do array.
*/
