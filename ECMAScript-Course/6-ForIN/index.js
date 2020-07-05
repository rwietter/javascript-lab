let fruits = ["Pera", "Maça", "Uva"];

// + ---------------------------------------------- +
// +              for
// + for => lê os índice/key e o tamanho do array/obj
// + ---------------------------------------------- +
function forFunction() {
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}
forFunction();

// + ---------------------------------------------- +
// +            for in
// + for in => lê o índice/key do array/obj e itera o índice
// + ---------------------------------------------- +
function forIn() {
  console.log("\n");
  for (let i in fruits) {
    console.log(fruits[i]);
  }
}
forIn();

let person = {
  name: "Fabiana",
  age: "22",
  city: {
    cep: 99670000,
    from: "Cidadela",
  },
};
function forInObj() {
  console.log("\n");
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
}
forInObj();

// + ---------------------------------------------- +
// +            for of
// + for of => lê o array e intera valores
// + ---------------------------------------------- +
function forOf() {
  console.log("\n");
  for (let frutas of fruits) {
    console.log(frutas);
  }
}
forOf();
