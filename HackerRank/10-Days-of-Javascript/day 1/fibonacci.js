function fibbo(num) {
  if (num <= 0) {
    return 1;
  } else if (num === 1) {
    return 1;
  }
  return fibbo(num - 1) + fibbo(num - 1);
}
console.log(fibbo(4));
