const getIndexZero = (seq, str) => seq.includes(str[0]);

const getLetter = (s) => {
  let letter;
  switch (true) {
    case getIndexZero("aeiou", s):
      letter = "A";
      break;
    case getIndexZero("bcdfg", s):
      letter = "B";
      break;
    case getIndexZero("hjklm", s):
      letter = "C";
      break;
    case getIndexZero("npqrstvwxyz", s):
      letter = "D";
      break;
  }
  return letter;
};

getLetter("adfgt".toLowerCase()).toUpperCase();
