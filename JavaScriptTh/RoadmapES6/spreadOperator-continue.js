const person = { name: "Mauricio Witter" };
const adress = { city: "Constantina", state: "RS" };
const mauricio = {
	...person,
	...adress, // - spread faz uma cópia do outro objeto
	country: "Brazil"
};
console.log(mauricio);
