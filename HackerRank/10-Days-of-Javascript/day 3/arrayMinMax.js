const getSecondLargest = (nums) => {
  let min = -Infinity;
  let max = -Infinity;
  for (let i in nums) {
    if (nums[i] > max) {
      min = max;
      max = nums[i];
    }
    if (nums[i] > min && nums[i] < max) {
      min = nums[i];
    }
  }
  return min;
};
console.log(getSecondLargest([8, 2, 1, 9, 4, 2, 55, 6, 3, 1]));
