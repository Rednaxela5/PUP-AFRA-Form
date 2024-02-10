
// Get references to input fields
const familyNameInput = document.getElementById('familyName');
const givenNameInput = document.getElementById('givenName');
const middleNameInput = document.getElementById('middleName');

// Define the areAllFieldsFilledOut() function
function areAllFieldsFilledOut() {
    // Get references to the input fields
    const academicTermSelect = document.getElementById('academicTerm');
    const academicYear1Select = document.getElementById('academicYear1');
    const academicYear2Select = document.getElementById('academicYear2');
    const collegeDepartmentSelect = document.getElementById('collegeDepartment');
    const firstTimeApplySelect = document.getElementById('firstTimeApply');
    const yearAdmittedDate = document.getElementById('yearAdmitted');
    const admissionStatusSelect = document.getElementById('admissionStatus');
    const pupcetRatingNumber = document.getElementById('pupcetRating');
    const hsAverageNumber = document.getElementById('hsAverage');
    const courseEnrolledInput = document.getElementById('courseEnrolled');
    const yearLevelSelect  = document.getElementById('yearLevel');
    const unitsEarnedSelect = document.getElementById('unitsEarned');
    const reasonForStoppingArea = document.getElementById('reasonForStopping');
    const reasonForContinuingArea = document.getElementById('reasonForContinuing');
    
    // Check if the required fields have a non-empty value
    if (familyNameInput.value.trim() === '' || givenNameInput.value.trim() === '' || middleNameInput.value.trim() === '' || // Update this line
        academicTermSelect.value.trim() === '' || academicYear1Select.value.trim() === '' || academicYear2Select.value.trim() === '' ||
        collegeDepartmentSelect.value.trim() === '' || firstTimeApplySelect.value.trim() === '' ||  yearAdmittedDate.value.trim() === '' || 
        admissionStatusSelect.value.trim() === '' || pupcetRatingNumber.value.trim() === '' || hsAverageNumber.value.trim() === '' || 
        courseEnrolledInput.value.trim() === '' || yearLevelSelect.value.trim() === '' || unitsEarnedSelect.value.trim() === '' || 
        reasonForStoppingArea.value.trim() === '' || reasonForContinuingArea.value.trim() === '') {
        // At least one required field is empty, return false
        return false;
    } else {
        // All required fields are filled out, return true
        return true;
    }
}

// Get the next button element
const nextButton = document.getElementById('nextButton');

// Add an event listener to the next button
nextButton.addEventListener('click', function() {
    // Check if all required fields are filled out
    if (areAllFieldsFilledOut()) {
        // Store the data in localStorage
        localStorage.setItem('familyName', familyNameInput.value.trim());
        localStorage.setItem('givenName', givenNameInput.value.trim());
        localStorage.setItem('middleName', middleNameInput.value.trim());
        // Add console.log statements to check if data is saved
        console.log('Family Name:', familyNameInput.value.trim());
        console.log('Given Name:', givenNameInput.value.trim());
        console.log('Middle Name:', middleNameInput.value.trim());

        // Redirect to the personalBackground page
        window.location.href = 'personalBackground.html';
        
    } else {
        // Display an error message
        alert('Please fill out all required fields.');
    }
});

    // Add event listeners for focus event on input fields
    familyNameInput.addEventListener('focus', function() {
        // Check if family name input field is empty
        if (this.value.trim() === '') {
            // Trigger the browser's built-in validation message
            this.reportValidity();
        }
    });

    givenNameInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    academicTermSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    academicYear1Select.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    academicYear2Select.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    collegeDepartmentSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    firstTimeApplySelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    yearAdmittedDate.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    admissionStatusSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    pupcetRatingNumber.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    hsAverageNumber.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });
    
    courseEnrolledInput.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    yearLevelSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    unitsEarnedSelect.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    reasonForStoppingArea.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });

    reasonForContinuingArea.addEventListener('focus', function() {
        if (this.value.trim() === '') {
            this.reportValidity();
        }
    });