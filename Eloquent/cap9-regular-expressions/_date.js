function getFormatDate(dateString) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(dateString);
  return new Date(year, month - 1, day);
}
console.log(getFormatDate("1-30-9020"));
console.log(getFormatDate("00-1-3000"));
console.log(getFormatDate("100-1-30000"));

// ----------------

let cat1 = /cat/.exec("concatenate");
let cat2 = /\bcat\b/.exec("concatenate");
let cat3 = /\bcat\b/.exec("cat");
console.log(`cat1 ${cat1} || cat2: ${cat2} || cat3: ${cat3}`);
