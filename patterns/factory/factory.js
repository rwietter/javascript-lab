const factoryFun = (name) => ({
  name,
  getName: () => name,
});
const factory = factoryFun("Mars");

console.log(factory.getName());
