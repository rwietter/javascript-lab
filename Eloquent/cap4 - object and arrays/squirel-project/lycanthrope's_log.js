// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞
//  The lycanthrope’s log
// ∞ ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ∞

let JOURNAL = require("./journal");

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

tableFor("pizza", JOURNAL);

const journalEvents = (journal) => {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
};
journalEvents(JOURNAL);

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

const journalCorrelation = (journal) => {
  for (let event of journalEvents(journal)) {
    let correlation = phi(tableFor(event, journal));
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(`${event} : ${correlation}`);
    }
  }
};
journalCorrelation(JOURNAL);
