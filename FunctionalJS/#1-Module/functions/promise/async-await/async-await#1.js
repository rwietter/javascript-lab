// Promise with then
function wait(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}

wait(2000)
  .then(() => console.log('Executando promise 1...'))
  .then(wait)
  .then(() => console.log('Executando promise 2...'))
  .then(wait)
  .then(() => console.log('Executando promise 3...'));

// Promise with async/await
function promise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function fastResolve() {
  return 20;
}

async function executar() {
  const valor = await promise();

  await wait(1500);
  console.log(`Async/Await ${valor}...`);

  await wait(1500);
  console.log(`Async/Await ${valor + 1}...`);

  await wait(1500);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3;
}

async function resolve() {
  const valor = await fastResolve();
  console.log(valor);
}

resolve();
