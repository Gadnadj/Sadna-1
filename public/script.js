function checkInputs() {
  var name = document.getElementById('studentName').value;
  var exam1 = document.getElementById('exam1').value;
  var exam2 = document.getElementById('exam2').value;
  var exam3 = document.getElementById('exam3').value;

  var nameValid = /^[a-zA-Z]+$/.test(name);
  var exam1Valid = /^\d+$/.test(exam1) && exam1 >= 0 && exam1 <= 100;
  var exam2Valid = /^\d+$/.test(exam2) && exam2 >= 0 && exam2 <= 100;
  var exam3Valid = /^\d+$/.test(exam3) && exam3 >= 0 && exam3 <= 100;

  var exam1Error = '';
  var exam2Error = '';
  var exam3Error = '';

  if (exam1 !== '' && !exam1Valid) {
    exam1Error = 'Please enter a valid Exam between 0 and 100.';
  }

  if (exam2 !== '' && !exam2Valid) {
    exam2Error = 'Please enter a valid Exam between 0 and 100.';
  }

  if (exam3 !== '' && !exam3Valid) {
    exam3Error = 'Please enter a valid Exam between 0 and 100.';
  }

  document.getElementById('nameError').textContent = nameValid
    ? ''
    : 'Please enter a valid name (letters only).';
  document.getElementById('exam1Error').textContent = exam1Valid
    ? exam1Error
    : 'Please enter a valid Exam between 0 and 100.';
  document.getElementById('exam2Error').textContent = exam2Valid
    ? exam2Error
    : 'Please enter a valid Exam between 0 and 100.';
  document.getElementById('exam3Error').textContent = exam3Valid
    ? exam3Error
    : 'Please enter a valid Exam between 0 and 100.';

  var isValid = nameValid && exam1Valid && exam2Valid && exam3Valid;
  document.getElementById('submitBtn').disabled = !isValid;
}

document.getElementById('studentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('studentName').value;
  const exam1 = document.getElementById('exam1').value;
  const exam2 = document.getElementById('exam2').value;
  const exam3 = document.getElementById('exam3').value;
  const response = await fetch('/api/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, grade1: exam1, grade2: exam2, grade3: exam3 }),
  });
  if (response.ok) {
    document.getElementById('studentForm').reset();
    alert('Student added successfully');
  } else {
    alert('Error adding student');
  }
});
