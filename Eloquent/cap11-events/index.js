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

// -------------------------- mousedown/mouseup ----------------------------------------------------
/**
Pressionar um botão do mouse faz com que vários eventos sejam disparados. Os eventos "mousedown"e "mouseup"são semelhantes a "keydown"e "keyup"e disparam quando o botão é pressionado e liberado. Eles acontecem nos nós DOM que estão imediatamente abaixo do ponteiro do mouse quando o evento ocorre.
*/
target.addEventListener("mousedown", event => {
  console.log(event);
});
target.addEventListener("mouseup", event => {
  console.log(event);
});

// -------------------------------- click ----------------------------------------------------------
window.addEventListener("click", event => {
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 10) + "px";
  dot.style.top = (event.pageY - 10) + "px";
  document.body.appendChild(dot);
});


// -------------------------------- Mouse motion --------------------------------------------------
let lastX; // Tracks the last observed mouse X position
let bar = document.querySelector(".div");
bar.addEventListener("mousedown", event => {
  if (event.button == 0) {
    lastX = event.clientX;
    window.addEventListener("mousemove", moved);
    event.preventDefault(); // Prevent selection
  }
});

function moved(event) {
  if (event.buttons == 0) {
    window.removeEventListener("mousemove", moved);
  } else {
    let dist = event.clientX - lastX;
    let newWidth = Math.max(10, bar.offsetWidth + dist);
    bar.style.width = newWidth + "px";
    lastX = event.clientX;
  }
}
/**
Quando os botões são pressionados, seu valor é a soma dos códigos para esses botões - o botão esquerdo tem o código 1, o botão direito 2 e o do meio 4. Dessa forma, você pode verificar se um determinado botão foi pressionado pegando o restante do valor de buttonse seu código.
 */


// -------------------------------- Touchscreen ----------------------------------------------------
/**
Existem tipos de eventos específicos acionados por interação de toque. Quando um dedo começa a tocar a tela, você obtém um "touchstart"evento. Quando é movido ao tocar, os "touchmove"eventos são disparados. Finalmente, quando ele parar de tocar na tela, você verá um "touchend"evento.
*/

// -------------------------------- Focus ----------------------------------------------------------
let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");
for (let field of Array.from(fields)) {
  field.addEventListener("focus", event => {
    let text = event.target.getAttribute("data-help");
    help.textContent = text;
  });
  field.addEventListener("blur", event => {
    help.textContent = "";
  });
}

// --------------------------------- load ----------------------------------------------------------
/*
  Quando uma página termina de carregar, o "load"evento é disparado na janela e nos objetos do corpo do documento. Isso geralmente é usado para agendar ações de inicialização que requerem que todo o documento tenha sido criado.
*/

// ----------------------- Eventos e loop de eventos -----------------------------------------------
