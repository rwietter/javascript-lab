const generatorRandomNumber = (min, max, numbers) => {
  if (min > max || max < min) [max, min] = [min, max];
  return new Promise((resolve, reject) => {
    const randomNumber = parseInt(Math.random() * max - min + 1, 10) + min;
    if (numbers.includes(randomNumber))
      reject(new Error(`This number ${randomNumber} has exists in ${numbers}`));
    resolve(randomNumber);
  });
};

const arrayGenerator = async (numbers) => {
  const data = [];
  try {
    for (const _ of Array(numbers).fill()) {
      data.push(await generatorRandomNumber(1, 10, data));
    }
  } catch (error) {
    return new Error('Failed to generator random number', error);
  }
  return data;
};

arrayGenerator(5)
  .then((numbers) => console.log(numbers))
  .catch((err) => console.log(err.message));
