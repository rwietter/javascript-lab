/**
 * let e const c riam escopo de bloco es6+
 * var cria escopo glogal fora de funções
 */
let x = 10;
if (true) {
  let y = 20;
  var z = 1e3;
  console.log(x + y + z); // 1030
}
console.log(x + "y" + z); // y is not defined

// --------

/*
 * A exceção é quando várias vinculações têm o mesmo nome — nesse caso, o valor escolhido é o mais intimo
 */
const getDivider = (n) => n / 2;

let n = 10;
console.log(getDivider(50)); // 25
console.log(n); // 10
