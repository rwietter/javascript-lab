function getHtmlElement() {
  const btns = document.createElement("div");
  const body = document.querySelector("body");
  pushBtnsDiv(btns, body);
}

function pushBtnsDiv(btns, body) {
  body.appendChild(btns);
  btns.id = "btns";
  createBtnArray();
}

function createBtnArray() {
  const createBtn = [
    "btn1",
    "btn2",
    "btn3",
    "btn4",
    "btn5",
    "btn6",
    "btn7",
    "btn8",
    "btn9",
  ];
  createButton(createBtn);
}

function createButton(btn) {
  for (let j = 1; j <= 9; j++) {
    btn[j] = document.createElement("button");
    btn[j].id = `btn${j}`;
    btns.appendChild(btn[j]);
    btn[j].innerHTML = j;
  }
  if (btn) {
    innerCSSAttributes(btn);
    createRandomNumbers();
  }
}

function createRandomNumbers() {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const btn5 = document.getElementById("btn5");
  randomNumbers(nums, ids, btn5);
}

function randomNumbers(nums, ids, btn5) {
  btn5.onclick = function (e) {
    nums.unshift(nums.pop());
    for (let i = 0; i <= 7; i++) {
      document.getElementById("btn" + ids[i]).innerHTML = nums[i];
    }
  };
}

function innerCSSAttributes(btnArray) {
  const btns = document.getElementById("btns");
  btns.style.width = "75%";
  for (let i = 1; i <= 9; i++) {
    btnArray[i].style.width = "30%";
    btnArray[i].style.fontSize = "24px";
    btnArray[i].style.height = "48px";
  }
}

getHtmlElement();
