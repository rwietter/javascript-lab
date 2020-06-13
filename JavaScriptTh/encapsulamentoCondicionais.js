// Problema: escrever condicionais de forma global
// Evite: não revela uma inteção
const person = {
  name: "Carlos",
  age: 25
};
if (person.age >= 18 && person.age <= 30) {
  //...
}

// Resolução
const isACoolPerson = person => person.age >= 18 && person.age <= 30;
if (isACoolPerson(person)) {
  //...
}

console.log(isACoolPerson(person));
