    // Add event listener to the next button
    const nextButton = document.getElementById('nextButtonAcademic');
    // Get references to the buttons
    const backButton = document.getElementById('back-button');
    const step1Button = document.getElementById('applicantInfo-step-button');
    const step2Button = document.getElementById('personal-background-step-button');

    nextButton.addEventListener('click', function() {
            // Redirect to the academicBackground page
             window.location.href = 'uploadDocuments.html';

    });

    // Add event listener for back button
    backButton.addEventListener('click', function() {
        // Navigate back to the personalBackground.html page
        window.location.href = 'personalBackground.html';
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
   



     


