const tryPromise = (min, max, resolve, reject) => {
  const randomNumber = parseInt(Math.random() * max - min + 1, 10) + min;
  try {
    if (!Number.isNaN(randomNumber)) resolve(randomNumber);
  } catch (error) {
    reject(error);
  }
};

const generatorRandomNumber = (min, max, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      tryPromise(min, max, resolve, reject);
    }, time);
  });
};

const waitGenPromiseNumbers = () => {
  return Promise.all([
    generatorRandomNumber(2, 10, 1000),
    generatorRandomNumber(2, 33, 5000),
    generatorRandomNumber(2, 5, 3000),
    generatorRandomNumber(2, 99, 0),
    generatorRandomNumber(2, 10, 4000),
    generatorRandomNumber(2, 88, 6000),
    generatorRandomNumber(5, 7, 2000),
  ]);
};

console.time('promise');
waitGenPromiseNumbers()
  .then(
    (numbers) => console.log(numbers),
    (err) => console.log(err.name)
  )
  .catch((err) => console.log(err.message))
  .finally(() => console.timeEnd('promise'));
