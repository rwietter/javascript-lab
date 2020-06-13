const map = ['a', 'b', 'c'].map.bind([1, 2, 3])
map(el => console.log(el))

/*
- Object.bindvinculará a thispalavra-chave ao valor fornecido (nesse caso, é isso [1, 2, 3]).
*/
