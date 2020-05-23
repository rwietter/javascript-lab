var myArray = [1, 2, 3];

for (var x = 0, length = myArray.length; x < length; x++) {
  // ...
} // "x" and "length" are side effects

// -----------

[1, 2, 3].forEach(function (item, index, array) {
  // No side effects! :)
});

/*
 * Side Effects são valores que alteram valores externos, não retornam nada, ou que não usam os argumentos passados.

 * Funções puras são funções que aceitam uma entrada e devolvem um valor sem modificar
 * quaisquer dados fora de seu escopo (Efeitos colaterais). Seu valor de saída ou retorno
 * deve depender da entrada/argumentos e funções puras devem retornar um valor.
 
 * https://blog.bitsrc.io/understanding-javascript-mutation-and-pure-functions-7231cc2180d3
 */
