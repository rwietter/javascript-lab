function hoistingOnFunctionInit() {
  log("Hoisting de função");
  function log(value) {
    console.log(value);
  }
}
// Neste caso, a fução inteira é içada para cima do log
hoistingOnFunctionInit(); // Hoisting de função

// ------------------------------------

// Hoisting de função
function hoistingOnFunction() {
  function log(value) {
    console.log(value);
  }
  log("Hoisting de função");
}

// DICA: BOA PRÁTICA É CRIAR A FUNÇÃO ANTES DE CHAMA-LÁ
