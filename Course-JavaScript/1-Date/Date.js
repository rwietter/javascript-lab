console.log('\n');

let date = new Date();
console.log(date.toLocaleDateString().fontcolor((color = 'red')));

let dateUnix = new Date(0); // Marco 0 refere-se ao Timestamp do unix, para uma data anterior -1
console.log(dateUnix.toString());

let getActualObjectDay = new Date(2020, 2, 6, 21, 00, 43, 999);
console.log(getActualObjectDay.toString());

let dateS = new Date('2019-03-06 21:00:50.123');
console.log(dateS.toString());
console.log(
  `${dateS.getDate()}-${dateS.getMonth() +
    1}-${dateS.getDate()}-${dateS.getFullYear()}-${dateS.getHours()}:${dateS.getMinutes()}:${dateS.getSeconds()}:${dateS.getMilliseconds()}`,
);

let msUnixCurrent = new Date(1583540238293); // hash do Timestamp corrigido
console.log(msUnixCurrent);

console.log('\n');

// Case
/*
  - Mês começa do 0
  - 0 === Domingo, 6 === Sábado
*/
