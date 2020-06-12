// Exemples

let journalJacques = [];
const addEntryEvents = (events, squirrel) => {
  journalJacques.push({ events, squirrel });
};
addEntryEvents(
  ["work", "touched tree", "pizza", "running", "television"],
  false
);
addEntryEvents(
  ["work", "ice cream", "cauliflower", "lasagna", "touched tree"],
  false
);
addEntryEvents(["weekend", "cycling", "break", "peanuts", "beer"], true);

// fórmula φ
const phi = (table) => {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
};

console.log(phi([76, 9, 4, 1]));
