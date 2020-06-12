## Encapsulamento

**As interfaces fornecem uma forma de definir o que será público e privado.**

- Público significa que o método ou variável será exposto a outras entidades.
- Privado significa que o método ou variável só exposto a sua classe e a classe mãe.
- Separar a interface da implementação é uma boa prática, isso é encpasulamento.

---

## Métodos

**Métodos são propriedades que possuem valores de função:**

```javascript
let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says '{line}'`);
};

rabbit.speak(`I'm alive.`);
```

- Quanto uma função é invocada como um método, é procurado uma propriedade e invocada, assim como em `object.method()`. O `This` aponta para o objeto em que foi chamado.
- Cada função tem o seu próprio `This`.

```javascript
function speak(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = {
  type: "white",
  speak,
};

let hungryRabbit = {
  type: "hungry",
  speak,
};

whiteRabbit.speak('Oh my ears and whiskers, how late it"s getting!');
hungryRabbit.speak(`I could use a carrot right now.`);
```

-

```javascript
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
normalize.call({ coords: [0, 2, 3], length: 5 });
```

---

## Prototypes

**A maioria dos objetos também possui um prototype. Um prototype é outro objeto que é usado como uma fonte alternativa de propriedades. Quando um objeto recebe uma solicitação de uma propriedade que não possui, seu prototype será pesquisado pela propriedade, depois o prototype do prototype e assim por diante.**

**É uma forma de "linkar" objetos, por exemplo: myObj._\_proto_\_ => Object.protoype => null**

**Ou seja, o _\_proto_\_ será mapeado para buscar as propriedades disponíveis, se não encontrar, ele passará a procurar no próximo _\_proto_\_ até chegar em Object.prototype e em null. Caso haja muitos objetos, esse mapeamento pode demorar para ser feito.**

**Por exemplo, o prototype do objeto abaixo, é um Object.prototype ancestral.**

```javascript
let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]
```

```javascript
console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null
```

**Há outras representações de prototypes, funções derivam de Function.prototype e arrays derivam de Array.prototype**

```javascript
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) == Array.prototype);
// → true
```

---

## Classes

**Uma classe define a forma de um tipo de objeto - quais métodos e propriedades ele possui. Esse objeto é chamado de instância da classe.**

**Para criar uma instância de uma determinada classe, precisa-se criar um objeto derivado do protótipo adequado, mas também deve garantir que ele próprio possua as propriedades que as instâncias dessa classe devem ter. É isso que uma função construtora faz.**

```javascript
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}
```

**A palavra `new` aplica automaticamente o prototype ao objeto correto. Além disso, ao aplica o `new` a uma função, essa função será tratada como um constructor.**

```javascript
function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("weird");
```

---

## Class notation

**Assim eram escritas funções no JavaScript antes de 2015. Então foram incluídas as notações de classes:**

```javascript
class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

---

## Overriding derived properties

**Quando adicionamos uma propriedade a um objeto, esteja presente no protótipo ou não, a propriedade é adicionada ao próprio objeto. Se já havia uma propriedade com o mesmo nome no protótipo, essa propriedade não afetará mais o objeto, pois agora está oculta atrás da propriedade do próprio objeto.**

```javascript
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small
```

---

## Maps

**Outra forma de mapear objetos e arrays:**

**Pelo fato de que como os objetos simples derivam do Object.prototype, as propriedades ToString estão lá.**

```javascript
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62,
};

console.log(`Júlia is ${ages["Júlia"]}`); // → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages); // → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages); // → Is toString's age known? true
```

**Os métodos set, get e has desse caso são internos ao Map()**

```javascript
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`); // → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack")); // → Is Jack's age known? false
console.log(ages.has("toString")); // → false
```

---

## Polymorphism

**O código polimórfico pode funcionar com valores de diferentes formas, desde que eles suportem a interface esperada.**

**O conceito de polimorfismo quer dizer várias formas, podemos tornar uma tipo em outro, o for/of loop também é:**

```javascript
Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};

console.log(String(blackRabbit)); // → a black rabbit
```

---

## Symbols

**Os Symbols são únicos, ou seja, não da para criar dois ou mais iguais:**

```javascript
let sym = Symbol("name");
console.log(sym == Symbol("name")); // → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]); // → 55
```

**É possível incluir propriedades de símbolo em expressões e classes de objetos usando colchetes ao redor do nome da propriedade.**

```javascript
let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  },
};
console.log(stringObject[toStringSymbol]()); // → a jute rope
```

---

## Getters, setters, and statics

**adicionar get antes do método**

```javascript
let varyingSize = {
  get size() {
    return Math.floor(Math.random() * 100);
  },
};

console.log(varyingSize.size); // → 73
console.log(varyingSize.size); // → 49
```

**Setters**

**Static permite escrever para as variáveis do constructor**

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); // → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius); // → 30
```

---

## Inheritance (Herança)

- **A herança prototype permite herdar funções da classe pai e adicionar novos métodos na classe que herdou. A nova classe herda propriedades e comportamento da classe antiga.**.

- **A classe `SymmetricMatrix` é uma subclasse derivada da superclasse `Matrix`**

- **Para inicializar uma instância para SymmetricMatrix, o construtor chama o construtor de sua superclasse por meio da palavra-chave super. Isso é necessário porque, se esse novo objeto precisa se comportar (aproximadamente) como uma matriz, precisará das propriedades da instância que as matrizes possuem. Para garantir que a matriz seja simétrica, o construtor envolve a função do elemento para trocar as coordenadas por valores abaixo da diagonal.**

```javascript
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3)); // → 3,2
```

- **Verificar a instancia de uma classe:**

```javascript
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix); // → true
console.log(new SymmetricMatrix(2) instanceof Matrix); // → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix); // → false
console.log([1] instanceof Array); // → true
```
