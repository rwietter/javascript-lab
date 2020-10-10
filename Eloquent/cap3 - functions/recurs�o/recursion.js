let sum = (x, y) => {
  if (y === 0) {
    return 1;
  }
  return x + sum(x, y - 1);
};
console.log(sum(5, 6));

/*
 * Recursão realiza uma chamada para a própria função, ou seja, realiza um loop com um adicional caso base de break
 * Ela tem um custo muito alto de recursos de memória, visto que aloca memória adicional para cada operação em cada chamada
 */
