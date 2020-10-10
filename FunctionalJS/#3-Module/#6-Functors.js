const securityType = (value) => ({
  value,
  isValid() {
    return this.value === null || this.value === undefined;
  },
  map(fn) {
    if (!this.isValid()) {
      const thisValue = fn(this.value);
      return securityType(thisValue);
    }
    return securityType('Here is error.');
  },
});

const str = 'A very faint but very large squid-like nebula is visible in planet Earth\'s sky -- but inside a still larger bat.';

const result = securityType(str)
  .map((string) => string.toUpperCase())
  .map((string) => string.slice(0, 45));
console.log(`${result.value}...`);
