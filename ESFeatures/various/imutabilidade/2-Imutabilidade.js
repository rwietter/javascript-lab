const students = [
  {
    name: "Laura",
    grid: 4
  },
  {
    name: "Larissa",
    grid: 9
  },
  {
    name: "Patrícia",
    grid: 7
  }
];

const getApprovedStudents = studentsList => {
  return students.filter(student => student.grid >= 7);
};

console.log("Alunos aprovados: ");
console.log(getApprovedStudents(students));

console.log("\nLista de alunos:");
console.log(students);

// -----------------------------------------------------------------------
// Concertar quando estudar arrays
const arrStudentsList = () => {
  let studentsOfSchool = [];
  studentsOfSchool = [
    ({
      name: "XXXX",
      grid: 4
    },
    {
      name: "YYYY",
      grid: 9
    },
    {
      name: "ZZZZ",
      grid: 7
    })
  ];
  return studentsOfSchool;
};

const studentsListSchool = arrStudentsList();

const getApprovedStudentsSchool = studentsListSchool => {
  console.log(arrStudentsList());
  return studentsListSchool.filter(student => student.grid >= 5);
};

console.log(getApprovedStudentsSchool(studentsListSchool));
