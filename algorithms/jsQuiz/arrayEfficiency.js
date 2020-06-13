const arr = [1, 2, 3]
const a = arr.reduce((acc, el, i) => ({ ...acc, [el]: i }), {})
console.log(a)

const b = {}
for (let i = 0; i < arr.length; i++) {
    b[arr[i]] = i
    // console.log(b[arr[i]])
}
console.log(b)

/*
- Quando bestá sendo definida, a b[arr[i]]propriedade é definida para o
- índice atual em cada loop. Quando aestá sendo definido, o operador
- spread ( ...) criará uma cópia superficial do objeto acumulador ( acc)
- em cada loop e definirá adicionalmente a nova propriedade. Essa cópia
- superficial é mais cara do que não executar uma cópia superficial.
- Portanto, bestá sendo definido com mais eficiência.
*/
