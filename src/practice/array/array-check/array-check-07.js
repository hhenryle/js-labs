export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.some(
    (student) => student['name'].toLowerCase() === 'alice' && student['gender'] === 'female',
  );
}
