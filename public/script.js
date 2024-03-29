// Function to check the validity of input fields
function checkInputs() {
  // Getting input values
  var name = document.getElementById('studentName').value;
  var exam1 = document.getElementById('exam1').value;
  var exam2 = document.getElementById('exam2').value;
  var exam3 = document.getElementById('exam3').value;

  // Checking if input values are valid
  var nameValid = /^[a-zA-Z ]+$/.test(name); // name should only contain letters and spaces
  // exams should only contain digits and be between 0 and 100
  var exam1Valid = /^\d+$/.test(exam1) && exam1 >= 0 && exam1 <= 100;
  var exam2Valid = /^\d+$/.test(exam2) && exam2 >= 0 && exam2 <= 100;
  var exam3Valid = /^\d+$/.test(exam3) && exam3 >= 0 && exam3 <= 100;

  // Error messages for each invalid input
  var exam1Error = '';
  var exam2Error = '';
  var exam3Error = '';

  // Checking if the exams' inputs are valid and not empty, else show error message
  if (exam1 !== '' && !exam1Valid) {
    exam1Error = 'Please enter a valid Exam between 0 and 100.';
  }

  if (exam2 !== '' && !exam2Valid) {
    exam2Error = 'Please enter a valid Exam between 0 and 100.';
  }

  if (exam3 !== '' && !exam3Valid) {
    exam3Error = 'Please enter a valid Exam between 0 and 100.';
  }

  // Displaying error messages
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

  // Check if all inputs are valid
  var isValid = nameValid && exam1Valid && exam2Valid && exam3Valid;
  // Enable or disable submit button based on the validity of inputs
  document.getElementById('submitBtn').disabled = !isValid;
}

// Event listener for form submission
document.getElementById('studentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  // Get values from form
  const name = document.getElementById('studentName').value;
  const exam1 = document.getElementById('exam1').value;
  const exam2 = document.getElementById('exam2').value;
  const exam3 = document.getElementById('exam3').value;
  // Make POST request to add new student
  const response = await fetch('/api/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, grade1: exam1, grade2: exam2, grade3: exam3 }),
  });
  // If the request was successful, reset form and show success message
  if (response.ok) {
    document.getElementById('studentForm').reset();
    alert('Student added successfully');
  } else {
    // If the request failed, show error message
    alert('Error adding student');
  }
});
