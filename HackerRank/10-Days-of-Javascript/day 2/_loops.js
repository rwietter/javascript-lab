function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i])) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!"aeiou".includes(s[i])) {
      console.log(s[i]);
    }
  }
}
vowelsAndConsonants(`baiuojvscrptlps`);

// refactor function
const vowelsAndConsonantsRef = (s) => {
  const vogal = "aeiou";
  [...s].forEach((str) => (vogal.includes(str) ? console.log(str) : null));
  [...s].forEach((str) => (vogal.includes(str) ? null : console.log(str)));
};
vowelsAndConsonantsRef("baiuojvscrptlps");
