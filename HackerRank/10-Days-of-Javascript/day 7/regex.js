function regexVar(str) {
  let re = new RegExp(/^(a|e|i|o|u).+\1$/);
  return re.test(str);
}
const res = regexVar("abcgjfka");
console.log(res);
