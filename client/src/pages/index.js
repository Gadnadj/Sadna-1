import React, { useState } from 'react';
import validate from '../validation/index.js';
import InputField from './InputField.js';
import './style.css';

// Composant principal pour le formulaire étudiant
function StudentForm() {
  const [name, setName] = useState('');
  const [firstExam, setFirstExam] = useState(null);
  const [secondExam, setSecondExam] = useState(null);
  const [thirdExam, setThirdExam] = useState(null);
  const [errorMessage, setErrorMessage] = useState({});

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const errors = validate({
      name,
      firstExam,
      secondExam,
      thirdExam,
    });
    setErrorMessage(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:8000/api/students', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, firstExam, secondExam, thirdExam }),
        });

        if (response.ok) {
          alert('Data saved successfully');
          setName('');
          setFirstExam(null);
          setSecondExam(null);
          setThirdExam(null);
          setErrorMessage({});
        } else {
          const error = await response.json();
          alert(error.message);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <InputField
          id='name'
          label='Name'
          type='text'
          value={name}
          setter={setName}
          error={errorMessage.name}
        />
        <InputField
          id='firstExam'
          label='First Exam'
          type='number'
          value={firstExam}
          setter={setFirstExam}
          error={errorMessage.firstExam}
        />
        <InputField
          id='secondExam'
          label='Second Exam'
          type='number'
          value={secondExam}
          setter={setSecondExam}
          error={errorMessage.secondExam}
        />
        <InputField
          id='thirdExam'
          label='Third Exam'
          type='number'
          value={thirdExam}
          setter={setThirdExam}
          error={errorMessage.thirdExam}
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  );
}

export default StudentForm;
