const students = [g
  {
    name: "Victor",
    city: "Manaus",
  },
  {
    name: "Clementine",
    city: "São Paulo",
  },
  {
    name: "Patricia",
    city: "Rio do sul",
  },
];

const cities = students.reduce((acc, student) => {
  if (student.city) {
    acc.push(student.city);
  }
  return acc;
}, []);
console.log(cities);

const citiesMap = students.map((items) => {
  return items.city;
}, []);
console.log(cities);

const citiesFilter = students.filter((items) => {
  return items.city === "Rio do sul";
});
console.log(citiesFilter);
