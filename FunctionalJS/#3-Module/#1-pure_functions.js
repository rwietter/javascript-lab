// Impura, pois depende de fatores externos

const PI = 3.993838;
const impureCalc = (raio) => raio * raio * PI;
console.log(impureCalc(10));

// Pura, pois depende apenas dos argumentos

const pureCalc = (raio, pi) => raio * raio * pi;
console.log(pureCalc(10, Math.PI));

/* Math.pi é um valor impuro pois é externo e pode mudar, no entanto,
por ser constante e bem estabelecid, pode ser considerado puro
*/
