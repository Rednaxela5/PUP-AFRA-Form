document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextButton');
    const personalBackgroundForm = document.getElementById('personalBackgroundForm');

    const blurOverlay = document.querySelector('.blur-overlay');

    const sexSelect = document.getElementById('sex');
    const ageSelect = document.getElementById('age');
   
    
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
            if (sexSelect.value.trim() !== '' && ageSelect.value.trim() !== '') {
            // Prepare form data
            const formData = new FormData();
            formData.append('Sex', sexSelect.value.trim());
            formData.append('Age', ageSelect.value.trim());
            
            // Send a POST request to your GAS endpoint
            fetch('https://script.google.com/macros/s/AKfycbwJaVvqlpRzhD4E1rVmO96-OzDSDkbq3Pp7KkAVN8HL6PCFT9ES65AOh7V5kagTX-zzKw/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Redirect to personalBackground.html upon successful submission
                    window.location.href = 'academicBackground.html';
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
            alert('There are still required fields that are empty.');
        }
    }

    // Add event listener to the "Next" button for form submission
    nextButton.addEventListener('click', handleFormSubmit);

    // Add event listener to the login form to show success message
    personalBackgroundForm.addEventListener('submit', function() {
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
