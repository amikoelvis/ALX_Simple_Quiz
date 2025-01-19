// Function Declaration

function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = '4';

    // Retrieve the User’s Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Compare the User’s Answer with the Correct Answer
    // Get the feedback element
    const feedBack = document.querySelector('#feedback');

    // Check if the user has selected an answer
    if (userAnswer.value === correctAnswer) {
        feedBack.textContent = "Correct! Well done.";
    } else {
        feedBack.textContent = "That's incorrect. Try again!";
    } 
}

// Add an Event Listener to the Submit Button

// Get the submit Button
const submitBtn = document.getElementById('submit-answer');

// Add a click event listener to this button
submitBtn.addEventListener('click', checkAnswer);