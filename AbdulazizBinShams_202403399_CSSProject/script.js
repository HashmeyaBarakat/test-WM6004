//Add the self correcting feature to the self correcting quiz
function checkAnswers() {
// Correct answers
const correctAnswers = {
    q1: 'b',
    q2: 'c',
    q3: 'c',
    q4: 'c',
    q5: 'b',
    q6: 'c',
    q7: 'c'
  };
let score = 0; // Start score at 0
// Loop through each question and check if the selected answer is correct
  for (let i = 1; i <= 7; i++) {
  const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
  if (selectedOption && selectedOption.value === correctAnswers[`q${i}`]) {
      score++; // If correct, add 1 to the score
  }
  }
// Display score result
const result = document.getElementById('result');
  if (score === 7) {
  result.textContent = "Perfect! You got all answers correct!";
  result.style.color = 'green'; // Set the color to green for perfect score
  } else if (score >= 4) {
  result.textContent = `You got ${score} out of 7 correct! Good job! Keep practicing!`;
  result.style.color = 'orange'; // Set the color to orange for a good score
  } else {
  result.textContent = `You got ${score} out of 7 correct! Better luck next time!`;
  result.style.color = 'red'; // Set the color to red for a low score
  }
  }




//Adding the self validating feature to the email form
function validateForm() {
let isValid = true; // Assume the form is valid initially

// Clear any previous error messages
document.querySelectorAll('.error-message').forEach((el) => el.textContent = "");

// Name validation (check if it has a space between first and last name)
const name = document.getElementById('name').value;
if (name.indexOf(' ') === -1) { // If there's no space in the name
  document.getElementById('name-error').textContent = "Please enter your full name (First and Last Name).";
  isValid = false; // Set form as invalid
  }

// Email validation (simple check if it has "@" and ".")
  const email = document.getElementById('email').value;
  if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    document.getElementById('email-error').textContent = "Please enter a valid email address (e.g., example@gmail.com).";
    isValid = false;
    }
// Phone number validation (check if it starts with +973 and has 13 characters)
  const phone = document.getElementById('phonenumber').value;
  if (phone.indexOf('+973 ') !== 0 || phone.length !== 13) {
    document.getElementById('phone-error').textContent = "Please enter your phone number in the format: +973 xxxx xxxx.";
    isValid = false;
    }
  // Check if the "regard" field is empty
  const regard = document.getElementById('regard').value;
  if (!regard) {
    document.getElementById('regard-error').textContent = "Please specify what this is regarding.";
    isValid = false;
  }
  // Check if the "message" field is empty
  const message = document.getElementById('message').value;
  if (!message) {
    document.getElementById('message-error').textContent = "Please enter a message.";
    isValid = false;
  }
  // If any field is invalid, return false to prevent form submission
  return isValid;
}