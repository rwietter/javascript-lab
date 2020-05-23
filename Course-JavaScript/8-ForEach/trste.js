let Frequency = new Array(
	'a', 'b', 'c', 'a', 'e', 'f', 'g',
	'h', 'i', 'j', 'k', 'l', 'm', 'n',
	'o', 'p', 'q', 'r', 's', 't', 'u',
	'v', 'x', 'w', 'y', 'z'
);

function hashFunc(c) {
	return (c - 'a');
}

function countFre(S) {
	for(let i = 0;i < S.length;++i) {
		let index = hashFunc(S[i]);
		Frequency[index]++;
	}
	for (let i = 0; i < 26; ++i) {
		console.log((i + 'a'), Frequency[i]);
	}
}
countFre(Frequency)

function countFree(S) {
  for(let c = 'a';c <= 'z';++c){
    let frequency = 0;
			for (let i = 0; i < S.length; ++i) {
				if (S[i] == c) {
					frequency++;
				}
			console.log((i + 'a'), Frequency[i], frequency)
		}
  }
}
countFree(Frequency)
