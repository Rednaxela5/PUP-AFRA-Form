document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextButton');
    const reAdmissionForm = document.getElementById('reAdmissionForm');
    
    const blurOverlay = document.querySelector('.blur-overlay');

    const familyNameInput = document.getElementById('familyName');
    const givenNameInput = document.getElementById('givenName');
    const middleNameInput = document.getElementById('middleName');
    const academicTermSelect = document.getElementById('academicTerm');
    const academicYear1Select = document.getElementById('academicYear1');
    const academicYear2Select = document.getElementById('academicYear2');
    const collegeDepartmentSelect = document.getElementById('collegeDepartment');
    const firstTimeApplySelect = document.getElementById('firstTimeApply');
    const firstApplicationDate = document.getElementById('firstApplicationDate');
    const yearAdmittedDate = document.getElementById('yearAdmitted');
    const admissionStatusSelect = document.getElementById('admissionStatus');
    const pupcetRatingNumber = document.getElementById('pupcetRating');
    const hsAverageNumber = document.getElementById('hsAverage');
    const courseEnrolledSelect = document.getElementById('courseEnrolled');
    const yearLevelSelect = document.getElementById('yearLevel');
    const unitsEarnedNumber = document.getElementById('unitsEarned');
    const reasonForStoppingArea = document.getElementById('reasonForStopping');
    const reasonForContinuingArea = document.getElementById('reasonForContinuing');
    
    const successMessage = document.getElementById('successMessage');

    // Function to show the success message
    function showSuccessMessage() {
        successMessage.style.display = 'block';
    }

    // Function to hide the success message
    function hideSuccessMessage() {
        successMessage.style.display = 'none';
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent the default form submission behavior

            // Show the blur overlay
            blurOverlay.style.display = 'block';

            // Check if both fields are filled out
            if (familyNameInput.value.trim() !== '' && givenNameInput.value.trim() !== '' && middleNameInput.value.trim() !== '' &&
            academicTermSelect.value.trim() !== '' && academicYear1Select.value.trim() !== '' && academicYear2Select.value.trim() !== '' &&
            collegeDepartmentSelect.value.trim() !== '' && firstTimeApplySelect.value.trim() !== '' && firstApplicationDate.value.trim() !== '' &&
            yearAdmittedDate.value.trim() !== '' && admissionStatusSelect.value.trim() !== '' && pupcetRatingNumber.value.trim() !== '' &&
            hsAverageNumber.value.trim() !== '' && courseEnrolledSelect.value.trim() !== '' && yearLevelSelect.value.trim() !== '' &&
            unitsEarnedNumber.value.trim() !== '' && reasonForStoppingArea.value.trim() !== '' && reasonForContinuingArea.value.trim() !== '' 
            ) {
            // Prepare form data
            const formData = new FormData();
            formData.append('FamilyName', familyNameInput.value.trim());
            formData.append('GivenName', givenNameInput.value.trim());
            formData.append('MiddleName', middleNameInput.value.trim());
            formData.append('AcademicTerm', academicTermSelect.value.trim());
            formData.append('AcademicYear1', academicYear1Select.value.trim());
            formData.append('AcademicYear2', academicYear2Select.value.trim());
            formData.append('CollegeDepartment', collegeDepartmentSelect.value.trim());
            formData.append('FirstTimeApply', firstTimeApplySelect.value.trim());
            formData.append('FirstApplicationDate', firstApplicationDate.value.trim());
            formData.append('YearAdmitted', yearAdmittedDate.value.trim());
            formData.append('AdmissionStatus', admissionStatusSelect.value.trim());
            formData.append('PupcetRating', pupcetRatingNumber.value.trim());
            formData.append('HsAverage', hsAverageNumber.value.trim());
            formData.append('CourseEnrolled', courseEnrolledSelect.value.trim());
            formData.append('YearLevel', yearLevelSelect.value.trim());
            formData.append('UnitsEarned', unitsEarnedNumber.value.trim());
            formData.append('ReasonForStopping', reasonForStoppingArea.value.trim());
            formData.append('ReasonForContinuing', reasonForContinuingArea.value.trim());

            // Send a POST request to your GAS endpoint
            fetch('https://script.google.com/macros/s/AKfycbzLBPTV9UYGtwgjZQgNjsneE4EpzT0OrncrHpAJJcu970nIgAu9WtNQ0cTQN5CORlg/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Redirect to personalBackground.html upon successful submission
                    window.location.href = 'personalBackground.html';
                } else {

                    // Hide the blur overlay if there's an error
                    blurOverlay.style.display = 'none';

                    // Handle error response
                    alert('An error occurred while submitting the form.');
                }
            })
            .catch(error => {

                // Hide the blur overlay if there's an error
                blurOverlay.style.display = 'none';

                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
        } else {

             // Hide the blur overlay if fields are empty
             blurOverlay.style.display = 'none';

            // Display an alert if fields are empty
            alert('Please out all the required fields.');
        }
    }

    // Add event listener to the "Next" button for form submission
    nextButton.addEventListener('click', handleFormSubmit);

    // Add event listener to the login form to show success message
    reAdmissionForm.addEventListener('submit', function() {
        // Show success message when form is submitted
        showSuccessMessage();
        // Hide success message after a certain duration (e.g., 3 seconds)
        setTimeout(function() {
            hideSuccessMessage();
        }, 3000); // 3000 milliseconds = 3 seconds
    });

        
    



    // Add event listener to detect when the next page starts loading
    window.addEventListener('beforeunload', function() {
        // Hide success message when the next page starts loading
        hideSuccessMessage();
    });
});
