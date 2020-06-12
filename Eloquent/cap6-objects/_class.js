class Rabbit {
  constructor(type) {
    this.type = type;
    console.log("Rabbit -> constructor -> type", type);
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
var meme = "sss";
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// ------------------
