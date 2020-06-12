function sum(tot, count) {
  function range(total, counter) {
    while (counter <= 10) {
      total += counter;
      counter++;
    }
    return total;
  }
  return range(tot, count);
}

console.log(sum(0, 1));

// funções aninhadas e closures
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Funções
