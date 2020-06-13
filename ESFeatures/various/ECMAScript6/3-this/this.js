/* no JavaScript o valor de this é determinado pelo
contexto de invocação da função e onde elas foram chamadas. */

/* No escopo global (em um browser) o this se refere ao objeto window, tanto dentro quanto fora de uma função: */

// Escopo Global
document.write(this); // [object Window]

function func() {
  return this;
}
document.write(func()); // [object Window]

// Método de objeto
const object = {
  function() {
    return this;
  }
};
document.write(object.func()); // [object Object]
// nesse caso ele se refere ao próprio objeto

// Objetos aninhados
// o this vai se referir ao objeto pai mais próximo:
const father = {
  name: "Ademar",
  child: {
    name: "Maurício",
    function() {
      return this.name;
    }
  }
};
document.write(father.child.function());

// erro ao usar loops corrigido usando uma constante para pegar o thiss
const obj = {
  name: "Jonnis",
  friends: ["Crazy", "Lee"],
  loop() {
    const self = this;
    this.friends.forEach(function(friend) {
      console.log(`${self.name} "knows" ${friend}`);
    });
  }
};

obj.loop();

// Função sem contexto
/* Quando usamos o this numa função invocada sem contexto então o bind é feito
no contexto global, mesmo se a função for definida dentro de um objeto: */
var context = "global";
var objct = {
  context: "object",
  method() {
    function funç() {
      var context = "function";
      return this.context;
    }
    return funç(); // INVOCADO SEM CONTEXTO;
  }
};

document.write(objct.method()); // GLOBAL
