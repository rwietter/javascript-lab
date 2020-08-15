// Os valores com replace têm um método que pode ser usado para substituir parte da sequência por outra.
console.log("papa".replace("p", "m"));

let message = "Sun".replace(/[un]/g, "ol"); // with /g replace global characters
console.log(message);
const hello = "dddd";

/* --------------------- Stock ----------------- */
/* --------------------------------------------- */
const stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(math, amount, unit) {
  amount = Number(amount) - 1;
  if (amount === 1) {
    unit = unit.slice(0, unit.length - 1);
  } else if (amount === 0) {
    amount = "no";
  }
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
