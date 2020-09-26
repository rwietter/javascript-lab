const g = (text) => text.toUpperCase();
const f = (text) => text.toLowerCase();

const compose = (...fns) => (text) => {
  return fns.reduce(async (acc, fn) => {
    if (Promise.resolve(acc) === acc) {
      return fn(await acc);
    }
    return fn(acc);
  }, text);
};

const response = compose(f, g);

response('4994').then(console.log);
