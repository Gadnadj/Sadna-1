function checkInputs() {
  var name = document.getElementById('studentName').value;
  var grade1 = document.getElementById('grade1').value;
  var grade2 = document.getElementById('grade2').value;
  var grade3 = document.getElementById('grade3').value;

  var nameValid = /^[a-zA-Z]+$/.test(name);
  var grade1Valid = /^\d+$/.test(grade1) && grade1 >= 0 && grade1 <= 100;
  var grade2Valid = /^\d+$/.test(grade2) && grade2 >= 0 && grade2 <= 100;
  var grade3Valid = /^\d+$/.test(grade3) && grade3 >= 0 && grade3 <= 100;

  var grade1Error = '';
  var grade2Error = '';
  var grade3Error = '';

  if (grade1 !== '' && !grade1Valid) {
    grade1Error = 'Please enter a valid grade between 0 and 100.';
  }

  if (grade2 !== '' && !grade2Valid) {
    grade2Error = 'Please enter a valid grade between 0 and 100.';
  }

  if (grade3 !== '' && !grade3Valid) {
    grade3Error = 'Please enter a valid grade between 0 and 100.';
  }

  document.getElementById('nameError').textContent = nameValid
    ? ''
    : 'Please enter a valid name (letters only).';
  document.getElementById('grade1Error').textContent = grade1Valid
    ? grade1Error
    : 'Please enter a valid grade between 0 and 100.';
  document.getElementById('grade2Error').textContent = grade2Valid
    ? grade2Error
    : 'Please enter a valid grade between 0 and 100.';
  document.getElementById('grade3Error').textContent = grade3Valid
    ? grade3Error
    : 'Please enter a valid grade between 0 and 100.';

  var isValid = nameValid && grade1Valid && grade2Valid && grade3Valid;
  document.getElementById('submitBtn').disabled = !isValid;
}
