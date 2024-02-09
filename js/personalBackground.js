document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored data from localStorage
    const storedFamilyName = localStorage.getItem('familyName');
    const storedGivenName = localStorage.getItem('givenName');
    const storedMiddleName = localStorage.getItem('middleName');

    // Check if the stored data is not null before populating the input fields
    if (storedFamilyName !== null) {
        document.getElementById('personalfamilyName').value = storedFamilyName;
    }
    if (storedGivenName !== null) {
        document.getElementById('personalgivenName').value = storedGivenName;
    }
    if (storedMiddleName !== null) {
        document.getElementById('personalmiddleName').value = storedMiddleName;
    }

    // Add event listener to clear localStorage when the page is unloaded
    window.addEventListener('unload', function() {
        localStorage.removeItem('familyName');
        localStorage.removeItem('givenName');
        localStorage.removeItem('middleName');
    });

    // Get references to the buttons
    const stepButton = document.getElementById('applicantInfo-step-button');
    const backButton = document.getElementById('back-button');

    // Add event listener for step button
    stepButton.addEventListener('click', function() {
        // Navigate back to the applicationForReAdmission.html page
        window.location.href = 'applicationForReAdmission.html';
    });

    // Add event listener for back button
    backButton.addEventListener('click', function() {
        // Navigate back to the applicationForReAdmission.html page
        window.location.href = 'applicationForReAdmission.html';
    });
});
