// Arrays, varáveis e obejtos devem ser imutáveis;
// Deve-se sempre cria outro, nunca sobscrever nem alterar, se preciso usa o filter.
const user = {
  name: "Maurício",
  lastName: "Witter"
};

const getUserWidthFullName = user => {
  return {
    ...user,
    fullName: `${user.name} ${user.lastName}`
  };
};
/* a função acima não cria um novo objeto, mas insere um novo elemento ao objeto ...user, já
que o mesmo aponta para user */

// spread operator = |...|user

const userWidthFullName = getUserWidthFullName(user); // aqui, cria um novo objeto com os dados do user + o fullName

console.time("userWidthFullName");
console.log(userWidthFullName);
console.log(user);
console.timeEnd("userWidthFullName");
