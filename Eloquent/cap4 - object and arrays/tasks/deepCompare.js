const deepEqual = (obj, object) => {
  if (obj === object) return true;
  let keyObj = Object.keys(obj);
  let keyObject = Object.keys(object);
  if (keyObj.length != keyObject.length) return false;
  for (let key of keyObj) {
    if (!keyObj.includes(key) || !deepEqual(obj[key], object[key]))
      return false;
  }
  return true;
};

let obj = {
  here: {
    is: "an",
  },
  object: 2,
};

console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, { here: 1, object: 2 })); // → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // → true
