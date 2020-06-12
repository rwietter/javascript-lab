let square = (number) => number * number;
console.log(square(2, 5, 8, "wtf")); // 4

/**
* @param {
  Podemos passar vários argumentos e utilizar apenas quantos quiser
} square
*/

// **********************************************************

let multiply = (x, y) => {
  if (y === undefined) {
    console.log(typeof y);
  } else {
    return x * y;
  }
};
multiply(1); // undefined
console.log(multiply(2, 5)); // 10

/**
* @param {
  ECMAScript permite passar quantas varáveis quiser para uma função, a mesma função pode ser chamada com diferentes parâmetros
} multiply 
*/

// **********************************************************

let multiplyDefaultValue = (x, y = 1e2) => {
  if (y === undefined) {
    console.log(typeof y);
  } else {
    return x * y;
  }
};
console.log(multiplyDefaultValue(7)); // 700
console.log(multiplyDefaultValue(2, 99)); // 198

/**
* @param {
  Inferindo um valor default podemos remover o erro
} multiply 
*/
