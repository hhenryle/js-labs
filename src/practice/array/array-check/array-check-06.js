export function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  if (typeof studentId !== 'number') return false;

  return studentList.some((student) => student['id'] === studentId);
}
