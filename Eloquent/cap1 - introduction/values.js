console.log(8 * null);
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("cinco" * 2);
// → NaN
console.log(false == 0);
// → verdadeiro

// A inferência de coersão identifica os valores para realizar determinada operação
// Operações com strings e numbers, geralmente causam NaN erros

/* ---------- Curto-circuito dos operadores lógicos ---------- */

// Operador || => caso o lado direito for true, o valor direito é selecionado, se não o da esquerda
// Operador && => se o valor da esquerda for false, retorna, se for true e o da direita true, seleciona.
console.log(null || "usuário");
console.log("Inês" || "usuário");
console.log(false && true);
console.log(true && false);
console.log(true && true);
