document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const blurOverlay = document.querySelector('.blur-overlay');
    const studentNumberInput = document.getElementById('studentNumber');
    const passwordInput = document.getElementById('password');
    const togglePasswordButton = document.getElementById('togglePassword'); // Make sure this element exists
    const successMessage = document.getElementById('successMessage'); // Make sure this element exists

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Show the blur overlay
        blurOverlay.style.display = 'block';

        // Check if both fields are filled out
        if (studentNumberInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            // Prepare form data
            const formData = new FormData();
            formData.append('StudentNumber', studentNumberInput.value.trim());
            formData.append('Password', passwordInput.value.trim());

            // Send a POST request to your GAS endpoint
            fetch('https://script.google.com/macros/s/AKfycbxsj0Zv34K4FsD2fSabqzu1-J_yU2jJQwqi8Yv4_E_PN3KqsnxPpDm8Wt1A94Yj4nom8A/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    // Redirect to applicationForReAdmission.html upon successful submission
                    window.location.href = 'applicationForReAdmission.html';
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
            alert('Both student number and password are required.');
        }
    });

    togglePasswordButton.addEventListener('click', function() {
        // Toggle the input type between "password" and "text"
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordButton.classList.remove('fa-eye-slash');
            togglePasswordButton.classList.add('fa-eye');
        } else {
            passwordInput.type = 'password';
            togglePasswordButton.classList.remove('fa-eye');
            togglePasswordButton.classList.add('fa-eye-slash');
        }
    });

    // Function to show the success message
    function showSuccessMessage() {
        successMessage.style.display = 'block';
    }

    // Function to hide the success message
    function hideSuccessMessage() {
        successMessage.style.display = 'none';
    }

    // Add event listener to the login form
    loginForm.addEventListener('submit', function() {
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
