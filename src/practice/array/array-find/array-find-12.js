function findLastStudentHavingMinAvg(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return;

  return studentList.reduce((minAvgStudent, student) =>
    caclAvg(student) <= caclAvg(minAvgStudent) ? student : minAvgStudent,
  );
}

function caclAvg(student) {
  return (student.english + student.math) / 2;
}

const studentList = [
  { id: 1, name: 'Alice', math: 9, english: 9 },
  { id: 2, name: 'Bob', math: 5, english: 4 },
  { id: 3, name: 'John', math: 5, english: 3 },
];

console.log(findLastStudentHavingMinAvg(studentList));
