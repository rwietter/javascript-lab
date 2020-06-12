let roseDragon = "🌹🐉";

// cada caracter unicode ocupa dois endereços
console.log(roseDragon.charCodeAt(0));

// por isso, denotar por índice não funciona
for (let i; i < roseDragon.length; i++) {
  console.log(roseDragon[i]);
}

// utilizar for of para iterar utf-8
for (let char of roseDragon) {
  console.log(char);
} // -> 🌹 -> 🐉
