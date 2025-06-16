function findAllStudents(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.filter((student) => student.math < 5);
}
