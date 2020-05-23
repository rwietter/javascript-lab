let object = Object.freeze({ value: 5 });
object.value = 10;
console.log(object.value); // → 5

// Object.freeze mantém o object puro e intocável
