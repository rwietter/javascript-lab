/*
var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/euiciowr");
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};
*/

// a função retorna uma resolução (resolve) OU um reject (erro)
const dataPromisse = function() {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/euiciowr");
    xhr.send(null);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("request error 404");
        }
      }
    };
  });
};

// .then e .catch são métodos que avaliam o resuldado da promise
dataPromisse()
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
