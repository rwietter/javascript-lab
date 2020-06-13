// registrar grupos de valores
// constitído por chave e valor

const user = {
  name: "XXX",
  age: 23
};

user.name = "Carlos"; // modificando object

const prop = "Ata"; // vira um elemento
user[prop] = "Sobrinho"; // da um valor ao elemento

user.lastName = "Muito calor"; // insere chave / valor

delete user.name; // deleta o name
console.log(user);

// ---------------- methods -----------------------------------
const userKey = {
  name: "hjkl",
  lastName: "zgpddf"
};

// recupera as chaves do objeto
console.log("\n\n\nPropriedas do objeto userKey: ", Object.keys(userKey));

// recupera os valores das chaves do objeto
console.log("\nValores das propriedades de userKey: ", Object.values(userKey));

// retorna um array de arrays contendo [nome_prop, valor_prop]
console.log("\nLista de propriedades e valor: ", Object.entries(userKey));

// mergear propriedades de objetos
Object.assign(userKey, { fullName: "Mauricio witter" }); // fere o conceito de imutabilidade
console.log(`\nAssign mergeado: `, userKey);
console.log("\nObjeto userKey ferido pela imutabilidade", userKey); // subrescreve o objeto
console.log("\nCriando um novo objeto modificado", { ...userKey, age: 26 }); // CORRETOR A SE FAZER, CRIA UM NOVO OBJETO/ARRAY
console.log("UserKey não foi modificado: ", userKey);

// freeze object
const newObject = {
  name: "JavaScript",
  lastName: "ECMA TC39"
};
Object.freeze(newObject); // congela o objeto e ele fica imutável
console.log("\n\n\nFreeze NewObject: ", newObject);

newObject.foo = "change";
delete newObject.name; // freeze, imutable
console.log("\nDelete newObject.name", newObject);

// Permitir alterar apenas propriedade existentes em um objeto, mas não criar novas
const sealObject = {
  name: "TypeScrip",
  lastName: "Microsoft"
};
Object.seal(sealObject); // impete cria ou remover objetos do object
sealObject.name = "Typescript SuperSet";
console.log("\n\nSeal edite sealObject.name", sealObject);
sealObject.age = 18; // como previsto, não cria o objeto
console.log("\nSeal add sealObject.age = 18", sealObject);
// Object.assign(sealObject, { fullName: "fortemente tipado" }); // Tenta inserir um elemento no objeto e da erro
console.log("\nfullName: 'fortemente tipado'", sealObject);
console.log("\nCriando um novo objeto modificado", { ...sealObject, age: 26 });
console.log("\nObjeto sealObject continua imutável", sealObject);
