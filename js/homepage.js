// Get the button element
const applyNowButton = document.getElementById('applyNowButton');

// Add click event listener to the button
applyNowButton.addEventListener('click', () => {
    // Add animation class to the body
    document.body.classList.add('fadeOut');

    // Redirect to the login page after the animation ends
    setTimeout(() => {
        window.location.href = '../html/login.html';
    }, 100); // Adjust the timeout duration as needed to match the animation duration
});

