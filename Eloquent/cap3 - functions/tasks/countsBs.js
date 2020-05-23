let countBs = ({ str1: strlen, str2: compareStr }) => {
  let count = 0;
  for (let string of strlen) {
    if (string === compareStr) {
      count += 1;
    }
  }
  return count;
};

let getStringLowerCase = (str1, str2) => {
  let str = {
    str1: str1.toLowerCase(),
    str2: str2.toLowerCase(),
  };
  return countBs(str);
};
// console.log(getStringLowerCase('kakakakkakajjj', 'K'));

module.exports = getStringLowerCase;
