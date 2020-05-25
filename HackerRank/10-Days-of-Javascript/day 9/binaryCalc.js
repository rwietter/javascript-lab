// let btn0 = document.getElementById(`btn0`);
// let btn1 = document.getElementById(`btn1`);
// let btnClr = document.getElementById(`btnClr`);
// let btnEql = document.getElementById(`btnEql`);
// let btnSum = document.getElementById(`btnSum`);
// let btnSub = document.getElementById(`btnSub`);
// let btnMul = document.getElementById(`btnMul`);
// let btnDiv = document.getElementById(`btnDiv`);
// let res = document.getElementById(`res`);

// let btnZero = [];
// let btnOne = [];

// btn0.addEventListener('click', (e) => {
//   btnZero.push(0);
//   console.log(btnZero);
//   e.stopPropagation();
// });

// btn1.addEventListener('click', (e) => {
//   btnOne.push(1);
//   console.log(btnOne);
//   e.stopPropagation();
// });

// function onButton(e) {
//   var btn = e.target || e.srcElement;
//   var action = document.getElementById(btn.id).innerHTML;
//   var res = document.getElementById('res');

//   switch (action) {
//     case '0':
//     case '1':
//     case '+':
//     case '-':
//     case '*':
//     case '/':
//       res.innerHTML += action;
//       break;
//     case 'C':
//       res.innerHTML = '';
//       break;
//     case '=':
//       var expr = res.innerHTML;
//       var nums = /(\d+)/g;
//       // Replace all base 2 nums with base 10 equivs
//       expr = expr.replace(nums, function (match) {
//         return parseInt(match, 2);
//       });
//       // eval in base 10 and convert to base 2
//       res.innerHTML = eval(expr).toString(2);
//       break;
//     default:
//       console.error('should not be executed');
//       break;
//   }
// }
// var buttons = document.getElementsByTagName('button');
// for (let button of buttons) {
//   button.onclick = onButton;
// }
