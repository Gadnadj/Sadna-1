function validateStudentForm(formData) {
  const { name, firstExam, secondExam, thirdExam } = formData;
  const newErrors = {};

  if (!name) {
    newErrors.name = 'Name is required';
  } else if (/[^a-zA-Z]/.test(name)) {
    newErrors.name = 'Name must contain only letters';
  }

  if (!firstExam) {
    newErrors.firstExam = 'Exam Grade is required';
  } else if (firstExam < 0 || firstExam > 100) {
    newErrors.firstExam =
      'Grade value must be a number between 0 and 100';
  }

  if (!secondExam) {
    newErrors.secondExam = 'Exam Grade is required';
  } else if (secondExam < 0 || secondExam > 100) {
    newErrors.secondExam =
      'Grade value must be a number between 0 and 100';
  }

  if (!thirdExam) {
    newErrors.thirdExam = 'Exam Grade is required';
  } else if (thirdExam < 0 || thirdExam > 100) {
    newErrors.thirdExam =
      'Grade value must be a number between 0 and 100';
  }

  return newErrors;
}

export default validateStudentForm;
