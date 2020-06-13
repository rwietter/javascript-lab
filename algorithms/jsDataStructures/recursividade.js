const main = number => {
  if (number == 1) {
    return number;
  }
  return number * main(number - 1);
};

console.log(main(6));
