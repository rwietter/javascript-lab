const symbolOne = Symbol();
const symbolTwo = Symbol();

// Symbols são únicos
console.log("symbol é igual a symbol 2? ", symbolOne === symbolTwo);

// Previnir conflito com nomes de propriedades
// As propriedades usando o symbol são únicas e não se sobreescrevem
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");
const user = {
  [nameSymbol1]: "Guilherme",
  [nameSymbol2]: "Lucas",
  lastName: "bernardo"
};
console.log(user);

// ----------------------------------------
// Symbols criam propriedades que não são enumerables
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave: ${key}: ${user[key]}`);
  }
}
// podemos ver que as propriedades symbols são ocultas do JavaScript

// Para manipular os symbols usamos:
console.log("\nObject.keys(user): ", Object.keys(user));
console.log("\nObject.values(user): ", Object.values(user));
console.log(
  "\nObject.getOwnPropertySymbols(user): ",
  Object.getOwnPropertySymbols(user)
); // exibir symbols de um objeto

// Acessando todos os elementos do objeto
console.log("\nReflect.ownKeys(user): ", Reflect.ownKeys(user));

console.log("\n");

// criar um enum
const directiones = {
  UP: Symbol("UP"),
  DOWN: Symbol("DOWN"),
  LEFT: Symbol("LEFT"),
  RIGHT: Symbol("RIGHT")
};

console.log(directiones);
