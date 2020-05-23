const getMaxLessThanK = (n, k) => {
  let max = 0;
  for (let b = n; b > 0; b--) {
    for (let a = b - 1; a > 0; a--) {
      if ((a & b) < k && (a & b) >= max) {
        max = a & b;
      }
    }
  }
  return max;
};
