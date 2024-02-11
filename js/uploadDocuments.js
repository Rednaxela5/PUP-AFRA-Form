// Add event listener to the next button
const submitButton = document.getElementById('submitButton');
// Get references to the buttons
const backButton = document.getElementById('backButton');
const step1Button = document.getElementById('applicantInfo-step-button');
const step2Button = document.getElementById('personal-background-step-button');
const step3Button = document.getElementById('academic-background-step-button');

submitButton.addEventListener('click', function() {
         window.location.href = 'thankYouPage.html';
});

// Add event listener for back button
backButton.addEventListener('click', function() {
    window.location.href = 'academicBackground.html';
});

// Get the next button element

// Add event listener for step button
step1Button.addEventListener('click', function() {
    // Navigate back to the applicationForReAdmission.html page
    window.location.href = 'applicationForReAdmission.html';
});

// Add event listener for step button
step2Button.addEventListener('click', function() {
    // Navigate back to the personalBackground.html page
    window.location.href = 'personalBackground.html';
});

// Add event listener for step button
step3Button.addEventListener('click', function() {
    // Navigate back to the personalBackground.html page
    window.location.href = 'academicBackground.html';
});