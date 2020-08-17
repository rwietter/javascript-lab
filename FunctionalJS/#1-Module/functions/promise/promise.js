const generatorRandomNumber = (min, max) => {
  if (min > max || max < min) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const randomNumber = parseInt(Math.random() * max - min + 1, 10) + min;
    if (!isNaN(randomNumber)) resolve(randomNumber);
    else reject(randomNumber);
  });
};

generatorRandomNumber(2, 3)
  .then((number) => number)
  .then(console.log)
  .catch((error) => console.log(error));
