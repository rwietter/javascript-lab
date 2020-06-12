function greeting(parameterVariable) {
  console.log("Hello, World!");
  console.log(parameterVariable);
}

(() => {
  const parameterVariable = "Welcome to 10 Days of JavaScript!";
  greeting(parameterVariable);
})();
