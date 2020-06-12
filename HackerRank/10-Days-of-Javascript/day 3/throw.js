// A execução da função atual irá parar (os comandos depois de throw não serão executados)
// define: throw expression | throw new Error(`Error`)
const isPositive = (a) => {
  if (a > 0) return "YES";
  else throw a === 0 ? new Error("Zero Error") : new Error("Negative Error");
};
console.log(isPositive(3));
console.log(isPositive(2));
console.log(isPositive(0));
console.log(isPositive(6));
