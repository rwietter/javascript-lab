function firstElement(array) {
  if (array.length == 0) {
    throw new Error("firstElement called with []");
  }
  return array[0];
}

/*
Agora, em vez de retornar silenciosamente indefinido (que você obtém ao ler uma
propriedade de matriz que não existe), isso explodirá seu programa em voz alta
assim que você o usar incorretamente. Isso torna menos provável que esses erros
passem despercebidos e seja mais fácil encontrar sua causa quando eles ocorrem.
*/
