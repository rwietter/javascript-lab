let person = {
  name: "Calors",
  age: 22,
  city: {
    cep: 99680 - 00,
    rua: "Rua sem saída",
  },
};

let {
  name = "Right",
  city: { cep: CEP, rua },
  ...rest
} = person;
console.log(`Nome: ${name}\nCEP: ${CEP}\n${rua}\nAge: ${rest.age}`);
