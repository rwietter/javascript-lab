let maxIntiger = Number.MAX_SAFE_INTEGER;
console.log(maxIntiger); // 9007199254740991

let newMaxIntiger = BigInt(maxIntiger * 0xffffffffffffff);
console.log(newMaxIntiger); // 649037107316853381508718003224576n

// ''''''''''''''''''''''

console.log(BigInt(1n) && BigInt(12n)); // 12n
console.log(BigInt(0n) && BigInt(12n)); // 0n
console.log(BigInt(0n) || BigInt(12n)); // 12n
console.log(BigInt(true)); // 1n
console.log(Boolean(12n)); // true
console.log(Boolean(0n)); // false

// ''''''''''''''''''''''

console.log(BigInt(111101001101011111111111111111001));
