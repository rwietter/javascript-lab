const typesMap = {
  string: (prop) => prop,
  function: (prop, genericParam) => genericParam(prop),
  object: (textEditor, genericParam) => ({ ...genericParam, textEditor }),
  undefined: () => false,
};

const gen = (typeofParam) => (prop, typeParam) =>
  typeofParam ? typesMap[typeof typeParam](prop, typeParam) : null;

const vsc = {
  name: 'Vscode',
  theme: 'Dark',
};

const storm = {
  name: 'Storm',
  theme: 'Light',
};

const generator = gen(typesMap[typeof vsc]);

console.log(generator(vsc, storm));
