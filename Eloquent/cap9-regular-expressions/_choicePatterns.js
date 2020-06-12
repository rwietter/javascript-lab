let universe = /\b\d+ (planet|star|black-role)s?\b/;

console.log(universe.test("12 planets")); // true
console.log(universe.test("stars")); // false
console.log(universe.test("1567 black-roles")); // true

universe = /\b(planet|star|back-role)s?\b/;
console.log(universe.test("stars")); // true
