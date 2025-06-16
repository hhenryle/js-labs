function findStudentHavingHighestMark(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return;

  return studentList.reduce((studentHighestMark, student) =>
    student.math > studentHighestMark.math ? student : studentHighestMark,
  );
}

const studentList = [
  { id: 1, name: 'Alice', math: 9 },
  { id: 2, name: 'Bob', math: 10 },
  { id: 3, name: 'John', math: 10 },
];
console.log(findStudentHavingHighestMark(studentList));
