const path = require('path');
const fs = require('fs');

const readFile = (err, data, resolve, reject) => {
  if (err) reject(err);
  resolve(data);
};

const promiseFile = () => {
  const pathName = path.join(__dirname, 'promise.js');
  const promise = new Promise((resolve, reject) => {
    fs.readFile(pathName, function (err, data) {
      readFile(err, data, resolve, reject);
    });
    console.log('Executou antes da callback');
  });
  console.log('Executou antes da Promise');
  return promise;
};

promiseFile()
  .then((file) => file.toString())
  .then(console.log)
  .catch((err) => console.log(err.message));
