// Assuming the submit button has the ID 'submit-button'
const submitButton = document.getElementById('nextButton');

// Add an event listener to the submit button
submitButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault(); 

    // Get references to the form inputs
    const familynameInput = document.getElementById('familyName');
    const givennameInput = document.getElementById('givenName');
    const middlenameInput = document.getElementById('middleName');

    // Check if all fields are filled out
    if (familynameInput.value.trim() !== '' && givennameInput.value.trim() !== '' && middlenameInput.value.trim() !== '') {
        // Prepare form data
        const formData = new FormData();
        formData.append('FamilyName', familynameInput.value.trim());
        formData.append('GivenName', givennameInput.value.trim());
        formData.append('MiddleName', middlenameInput.value.trim());

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
