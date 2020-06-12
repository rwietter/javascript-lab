function countButton(button) {
  let i = 0;
  button.onclick = function () {
    i += 1;
    button.innerHTML = i;
  };
}

function createButton() {
  const button = document.createElement("button");
  button.innerHTML = "0";
  button.id = "btn";
  document.body.appendChild(button);
  countButton(button);
}

createButton();
