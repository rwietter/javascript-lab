// EventListener com stopPropagation
const btn = document.querySelector('#click');
const body = document.querySelector('body');

body.addEventListener('click', (e) => console.log('Lorem ipsum'))

function btnOnClick(e) {
  e.stopPropagation(); // interrompe a propagação de listener para os elementos pais
  console.log('clicked');
}

btn.addEventListener('click', btnOnClick);

// ------------------------------------------------------------------------------------------------
/* Também é possível usar a targetpropriedade para lançar uma ampla rede para um tipo específico de evento. Por exemplo, se você tiver um nó contendo uma longa lista de botões, pode ser mais conveniente registrar um manipulador de clique único no nó externo e fazer com que ele use a targetpropriedade para descobrir se um botão foi clicado, em vez de registrar manipuladores individuais em todos os botões. */
const target = document.querySelector('.target');

target.addEventListener('click', (e) => {
  e.stopPropagation();
  if (event.target.nodeName == "BUTTON") {
    console.log("Clicked", event.target.textContent);
  }
})

// ------------------------------------- keydown ---------------------------------------------------
window.addEventListener("keydown", event => {
  if (event.key == "v") {
    document.body.style.background = "violet";
  }
});
window.addEventListener("keyup", event => {
  if (event.key == "v") {
    document.body.style.background = "";
  }
});

// ------------------------------ keydown ----------------------------------------------------------
// shiftKey, ctrlKey, altKey, and metaKey
window.addEventListener("keydown", event => {
  if (event.key == " " && event.ctrlKey) {
    console.log("Continuing!");
  }
});
