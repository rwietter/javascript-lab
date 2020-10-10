// soma
let data = [1, 4];
console.log(data.reduce((acc, curr) => acc + curr));

let arr1 = [12, 5]
let arr2 = [15, 7]

console.log([...arr1, ...arr2])

// normalização de dados
const users = [
	{
		id: 1,
		name: "abc",
		sexo: "F",
	},
	{
		id: 2,
		name: "hf",
		sexo: "F",
	},
	{
		id: 3,
		name: "cd",
		sexo: "M",
	},
];

const userObj = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {})
console.log(userObj);


// agrupamento de dados
const groupUser = users.reduce((acc, user) => {
  if (!acc[user.sexo]) {
	  acc[user.sexo] = [];
  }
  acc[user.sexo].push(user);
	return acc;
}, []);
console.log(groupUser);
