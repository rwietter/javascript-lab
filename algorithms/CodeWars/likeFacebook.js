// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

// Você provavelmente conhece o sistema "curtir" no Facebook e em outras páginas.As pessoas podem
// "curtir" postagens de blog, fotos ou outros itens.Queremos criar o texto que deve ser
// exibido ao lado de um item desse tipo.

// Implemente uma função likes:: [String] -> String, que deve receber uma matriz de entrada,
// contendo os nomes das pessoas que gostam de um item.Ele deve retornar o texto de
// exibição conforme mostrado nos exemplos:

(() => {
  const names = ["John", "Jacob", "Mark", "Max"];
  return names.length === 0
    ? `no one likes this`
    : names.length === 1
    ? names[1] + " likes this"
    : names.length === 2
    ? names[0] + " and " + names[1] + " like this"
    : names.length === 3
    ? names[0] + ", " + names[1] + " and " + names[2] + " like this"
    : names.length > 3
    ? names[0] + ", " + names[1] + " and " + names.length + " others like this"
    : "default";
})();

// * passar element por element verificando or adicionar a cada verificação

// // criar um array
// ! mapear o array
// ! fazer uma repetição com condicional e com map ou foreath
