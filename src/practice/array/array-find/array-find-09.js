function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;
  if (typeof studentId !== 'number') return -1;

  return studentList.findIndex((student) => student.id === studentId);
}

const studentList = [
  { id: 1, name: 'Easy' },
  { id: 2, name: 'Frontend' },
];

console.log(findStudentById(studentList, 2));
