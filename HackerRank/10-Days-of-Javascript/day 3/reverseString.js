function reverseString(s) {
  try {
    let str = s.split("").reverse().join("");
  } catch (error) {
    console.log(error.message);
    console.log(error.name);
  } finally {
    console.log(s);
  }
}
let str = "1234";
reverseString(Number(1234));

// Reference: https://javascript.info/try-catch
