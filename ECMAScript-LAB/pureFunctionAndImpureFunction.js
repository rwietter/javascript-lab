// Função que não altera suas entradas é pura, e é o que deve se fazer
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 6));

// Função impura que altera sua entrada, nunca usar
var account = {
  total: 4
};

function withdraw(account, amount) {
  account.total -= amount;
}

console.log(withdraw(account, 5));
