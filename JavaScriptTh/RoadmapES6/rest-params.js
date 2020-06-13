// * (param1, param1, ...restParams) => {};

const showName = (...fullName) => {
	console.log(fullName);
};
console.log(showName("Mauricio", "Witter"));

// ? Rest params cria um array

const sum = (...numbers) => {
	return numbers.reduce((accResult, currNumber) => accResult + currNumber);
};
console.log(sum(1, 2, 3, 4));
