function isAlice(student, idx, arr) {
  if (!student) return false;

  return student.gender === 'female' && student.name.toLowerCase() === 'alice';
}

export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.some((student) => isAlice(student));
}

export function hasAliceV2(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];

    if (isAlice(student)) return true;
  }

  return false;
}

export function hasAliceV3(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  let hasAliceFlag = false;

  studentList.forEach((student) => {
    if (isAlice(student)) hasAliceFlag = true;
  });

  return hasAliceFlag;
}

export function hasAliceV3(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  let hasAliceFlag = false;

  studentList.forEach((student) => {
    if (isAlice(student)) hasAliceFlag = true;
  });

  return hasAliceFlag;
}

export function hasAliceV4(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return Boolean(studentList.find(isAlice));
}

export function hasAliceV5(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.findIndex(isAlice) >= 0;
}

export function hasAliceV6(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.filter(isAlice).length > 0;
}
