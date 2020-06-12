function getGrade(score) {
  let grade;
  return score > 25 && score <= 30
    ? (grade = "A")
    : score > 20 && score <= 25
    ? (grade = "B")
    : score > 15 && score <= 20
    ? (grade = "C")
    : score > 10 && score <= 15
    ? (grade = "D")
    : score > 5 && score <= 10
    ? (grade = "E")
    : score > 0 && score <= 10
    ? (grade = "F")
    : false;
}

console.log(getGrade(8));

// ----------------

function getGradeMath(score) {
  return "FFEDCBA"[Math.ceil(score / 5.0)];
}
console.log(getGradeMath(8));
