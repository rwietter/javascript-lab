const modifyArray = (nums) => {
  const reduce = nums.reduce((acc, num) => {
    if (num % 2 === 0) {
      acc.push(num * 2);
    } else {
      acc.push(num * 3);
    }
    return acc;
  }, []);
  return reduce;
};
console.log(modifyArray([1, 2, 3, 4]));

// refactoring

const modifyArrayRefector = (nums) => {
  return nums.map((num) => (num % 2 === 0 ? num * 2 : num * 3));
};
console.log(modifyArrayRefector([1, 2, 3, 4]));
