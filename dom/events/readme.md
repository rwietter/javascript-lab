## Events

### Bolhas de eventos, eventos não-performáticos

**Ao clicar um elemento, o elemento se torna o target do evento, então, o Javascrit vai procurar se existe algum EventListener atribuído a esse elemento, então irá disparar a função de callback que representa a ação que deve acontecer quando o evento é disparado.**

**Porém, esse event é propagado a partir do target em que foi clicado até o topo do DOM. A propagação atinge o elemento pai, então o JavaScript verifica se há um EventListener nesse elemento e irá disparar a função callback se ele existir. Então, o target é propagado para o elemento superior ao pai a assim por diante.**

```javascript
const lis = document.querySelectorAll("li");

lis.forEach((li) => {
  li.addEventListener("click", (event) => {
    const clickedElement = event.target;
    console.log("Clicou na LI");
    clickedElement.remove();
  });
});

ul.addEventListener("click", () => {
  console.log("Clicou na UL");
});

const body = document.querySelector("body");
body.addEventListener("click", () => {
  console.log("Clicou no body");
});

/*
  Clicou na LI
  Clicou na UL
  Clicou no body
*/
```

## Solução (stopPropagation)

```javascript
const lis = document.querySelectorAll("li");

lis.forEach((li) => {
  li.addEventListener("click", (event) => {
    const clickedElement = event.target;

    console.log("Clicou na LI");

    event.stopPropagation();

    clickedElement.remove();
  });
});

ul.addEventListener("click", () => {
  console.log("Clicou na UL");
});

const body = document.querySelector("body");
body.addEventListener("click", () => {
  console.log("Clicou no body");
});

/*
  Clicou na LI
*/
```

---

## Melhorando a performance encontrando o elemento por TagName

```javascript
ul.addEventListener("click", (event) => {
  let clickedElement = event.target;
  if (clickedElement.tagName === "LI") {
    clickedElement.remove();
  }
});
```
