// descreve o tipo de loop
const repeat = (n, action) => {
  for (let i = 0; i < n; i++) {
    action(i);
  }
};

// corpo do loop: o corpo é escrito como valor/parâmetro de função
let arr = [];
repeat(5, (i) => {
  arr.push(i + 1);
});

repeat(10, console.log);
console.log(arr);
