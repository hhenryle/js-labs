function getAvgMarkStudent(marks) {
  if (!marks) return -1;

  const markList = Object.values(marks);
  const sum = markList.reduce((sum, mark) => sum + mark);

  return sum / markList.length;
}

export function countStudents(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;

  return studentList.filter((student) => getAvgMarkStudent(student.marks) >= avgMark).length;
}
