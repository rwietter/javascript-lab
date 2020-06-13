let a = 'programming and developing';
let b = 'is';
let c = 'excellent — beautiful';

let res =
  c.substr(-6, 1) +
  c[0] +
  a[6] +
  c.substr(-8, 1) +
  a[18] +
  b[0] +
  c[7] +
  a.substr(-3, 1) +
  a[2] +
  b[1];
console.log(res);

var str = 'programming and developing is excellent — beautiful';
var re = str.match(/\sbe/g);
console.log(re);
