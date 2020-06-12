/**
* @param {
  JavaScript vai empilhando as chamadas de função, a última chamada sempre está no topo, para referenciar ela de volta,
  quando a função retorna ou acaba sua tarefa, ela é removida da pilha.
} Who
*/

let getWho = (who) => console.log(who);
getWho("Gabe");
console.log("Vintage Culture");

// ----- loop stack overflow
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken()); // RangeError: Maximum call stack size exceeded
