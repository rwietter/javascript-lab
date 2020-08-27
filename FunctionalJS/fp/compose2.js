const { log } = console;

const g = (n) => n + 1;
const f = (n) => n * 2;

const wait = (time) => (x) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(f(g(x)));
    }, time);
  });

wait(500)(7).then(log); // => 16
