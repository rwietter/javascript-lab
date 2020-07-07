const interval = async () => {
  setTimeout(() => {
    console.log('Two');
  }, 5000);
};

interval();

/** Promises */
const fifteen = Promise.resolve(15);
fifteen.then((value) => console.log(`Got ${value}`));

console.log('this');
