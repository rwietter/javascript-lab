let person = ["Julius", "Elon", "Carla"];
let [, , getPerson] = person;
console.log(getPerson);

let solarSystem = {
  star: "Sun",
  planet: {
    mercury: "mercury",
    venus: "venus",
    earth: "earth",
    mars: "mars",
  },
};

let {
  star,
  planet: { mars },
} = solarSystem;
console.log(star, mars);
