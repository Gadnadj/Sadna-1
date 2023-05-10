// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

// import StudentForm from '../pages/index.js';

// describe('StudentForm', () => {
//   it('displays input values correctly', () => {
//     const { getByLabelText } = render(<StudentForm />);
//     const nameInput = getByLabelText('Name');
//     const firstExamInput = getByLabelText('First Exam');
//     const secondExamInput = getByLabelText('Second Exam');
//     const thirdExamInput = getByLabelText('Third Exam');

//     fireEvent.change(nameInput, { target: { value: 'Gad Nadjar' } });
//     fireEvent.change(firstExamInput, { target: { value: '80' } });
//     fireEvent.change(secondExamInput, { target: { value: '90' } });
//     fireEvent.change(thirdExamInput, { target: { value: '85' } });

//     expect(nameInput.value).toBe('Gad Nadjar');
//     expect(firstExamInput.value).toBe('80');
//     expect(secondExamInput.value).toBe('90');
//     expect(thirdExamInput.value).toBe('85');
//   });

//   it('displays validation errors when form fields are invalid', async () => {
//     const { getByLabelText, getByText, queryAllByText } = render(
//       <StudentForm />
//     );
//     const nameInput = getByLabelText('Name');
//     const firstExamInput = getByLabelText('First Exam');
//     const secondExamInput = getByLabelText('Second Exam');
//     const thirdExamInput = getByLabelText('Third Exam');

//     fireEvent.change(nameInput, { target: { value: '' } });
//     fireEvent.change(firstExamInput, { target: { value: '' } });
//     fireEvent.change(secondExamInput, { target: { value: '' } });
//     fireEvent.change(thirdExamInput, { target: { value: '' } });

//     fireEvent.submit(screen.getByRole('button', { name: /submit/i }));

//     // Vérification des messages d'erreur
//     await waitFor(() => {
//       expect(getByText('Name is required')).toBeInTheDocument();
//       expect(queryAllByText('Exam Grade is required')).toHaveLength(3);
//     });
//   });

//   it('does not display success message when data is not saved successfully', async () => {
//     const { getByLabelText, getByRole, queryByText } = render(<StudentForm />);
//     const nameInput = getByLabelText('Name');
//     const firstExamInput = getByLabelText('First Exam');
//     const secondExamInput = getByLabelText('Second Exam');
//     const thirdExamInput = getByLabelText('Third Exam');

//     fireEvent.change(nameInput, { target: { value: 'Gad Nadjar' } });
//     fireEvent.change(firstExamInput, { target: { value: '80' } });
//     fireEvent.change(secondExamInput, { target: { value: '90' } });
//     fireEvent.change(thirdExamInput, { target: { value: '85' } });

//     fireEvent.submit(getByRole('button', { name: /submit/i }));

//     await waitFor(
//       () => {
//         expect(queryByText('Data saved successfully')).toBeNull();
//       },
//       { timeout: 5000 }
//     );

//     expect(getByRole('button', { name: /submit/i })).toBeInTheDocument();
//   });
// });
