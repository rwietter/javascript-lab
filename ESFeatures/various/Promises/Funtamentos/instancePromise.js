let callback = (resolve, reject) => {
  // * faz consulta assíncrona
  // * Saídas: Ok or Error

  var error = false;
  const result = true;

  if (error) {
    reject(error);
  } else {
    resolve(result);
  }
};

const promise = new Promise(callback) // - Promise recebe um callback
  .then(result => {
    console.log(result);
  })
  .then(() => {
    console.log("OK");
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Done");
  });
