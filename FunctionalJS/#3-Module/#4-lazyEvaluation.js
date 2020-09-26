// -------------------------------------------------------
// Not lazying
// -------------------------------------------------------

const normal = (min, max) => {
  const end = Date.now() + 2500;
  while (Date.now() < end) {}
  return Math.floor(Math.random() * min + max);
};

normal(4, 10);
normal(4, 10);
normal(4, 10);

// -------------------------------------------------------
// lazying
// -------------------------------------------------------

const lazy = (min) => {
  const end = Date.now() + 2500;
  while (Date.now() < end) {}
  return (max) => {
    return Math.floor(Math.random() * min + max);
  };
};

const lazyFn = lazy(4);

lazyFn(10);
lazyFn(10);
lazyFn(10);
