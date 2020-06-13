const size = 8;
let string = " ";

const theArray = (size, string) => {
  for (let i = 1; i <= size; i++) {
    for (let y = 1; y <= size; y++) {
      if ((i + y) % 2 == 0) {
        string += " ";
      } else {
        string += "#";
      }
    }
  }
  string += "\n";
  console.log(string);
};
theArray(size, string);
