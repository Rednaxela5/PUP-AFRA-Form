document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('nextButton');

    // Add an event listener to the submit button
    submitButton.addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault(); 

        // Get references to the form inputs
        const familynameInput = document.getElementById('familyName');
        const givennameInput = document.getElementById('givenName');
        const middlenameInput = document.getElementById('middleName');
        const academicTermSelect = document.getElementById('academicTerm');
        const academicYear1Select = document.getElementById('academicYear1');
        const academicYear2Select = document.getElementById('academicYear2');
        const collegeDepartmentSelect = document.getElementById('collegeDepartment');
        const firstTimeApplySelect = document.getElementById('firstTimeApply');
        const FirstApplicationDate = document.getElementById('FirstApplicationDate');

        // Check if all fields are filled out
        if (familynameInput.value.trim() !== '' && givennameInput.value.trim() !== '' && middlenameInput.value.trim() !== '' &&
            academicTermSelect.value.trim() !== '' && academicYear1Select.value.trim() !== '' && academicYear2Select.value.trim() !== '' &&
            collegeDepartmentSelect.value.trim() !== '' && firstTimeApplySelect.value.trim() !== '' && FirstApplicationDate.value.trim() !== '') {
            // Prepare form data
            const formData = new FormData();
            formData.append('FamilyName', familynameInput.value.trim());
            formData.append('GivenName', givennameInput.value.trim());
            formData.append('MiddleName', middlenameInput.value.trim());
            formData.append('AcademicTerm', academicTermSelect.value.trim()); // Use unique key for academic term
            formData.append('AcademicYear1', academicYear1Select.value.trim()); // Use unique key for academic year 1
            formData.append('AcademicYear2', academicYear2Select.value.trim()); // Use unique key for academic year 2
            formData.append('CollegeDepartment', collegeDepartmentSelect.value.trim());
            formData.append('FirstTimeApply', firstTimeApplySelect.value.trim());
            formData.append('FirstApplicationDate', FirstApplicationDate.value.trim());

            // Send a POST request to your GAS endpoint
            fetch('https://script.google.com/macros/s/AKfycbxsj0Zv34K4FsD2fSabqzu1-J_yU2jJQwqi8Yv4_E_PN3KqsnxPpDm8Wt1A94Yj4nom8A/exec', {
                    method: 'POST',
                    body: formData
                })
            
                .then(response => {
                    if (response.ok) {
                        // Redirect to personalBackground.html upon successful submission
                        window.location.href = 'personalBackground.html';
                    } else {
                        // Handle error response
                        alert('An error occurred while submitting the form.');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('An error occurred while submitting the form.');
                });
        } else {
            // Display an alert if any fields are empty
            alert('There are still required empty fields!');
        }


    });
});
