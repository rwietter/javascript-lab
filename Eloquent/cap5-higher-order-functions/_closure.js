function outerScope(a) {
  const outside = "i am outside";
  return function innerScope(b) {
    const inside = "i am inside";
    console.log(`innerScope ➡ ${inside}: ${a + b}`);
    console.log(`outerScope ➡ ${outside}: ${a + b}`);
  };
}

const inner = outerScope(3);
inner(2);
