function fn() {
  console.log(text);
  var text = "exemple";
  console.log(text);
}

fn();

function fn1() {
  var text;
  console.log(text);
  var text = "exemple";
  console.log(text);
}
fn1();

// O hoisting permite o JavaScript executar uma variável antes de ser declarada;
// Isso porque, o JavaScript faz uma içamento de definição da variável antes dela ser chamada;
