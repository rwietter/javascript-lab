const FizzBuzz = () => {
  let i = 1;
  while (i < 100) {
    let output = "";
    if (i % 3 === 0) console.log("Fizz");
    if (i % 5 === 0) console.log("Buzz");
    console.log(output || i);
    i++;
  }
};
FizzBuzz();
