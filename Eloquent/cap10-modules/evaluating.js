/*
  # Criar módulos
  Envolver o código do módulo em uma função e usar essa função como escopo do módulo
*/
let plusOne = Function("n", "return n + 1;");
console.log(plusOne(4)); // → 5

/* -------------------------------------------- */
/* ES6 modules
/* -------------------------------------------- */
import ordinal from "ordinal";
import { days, months } from "date-names";

export function formatDate(date, format) {
  /* ... */
}
/*
 Da mesma forma, export é usada para exportar coisas. Pode aparecer na frente de uma função, classe, ou
 definição de ligação ( let, const, ou var).
*/
