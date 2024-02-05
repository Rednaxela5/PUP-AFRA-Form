
/* Removed temporarily because this is the reason why  the back to top button is not functioning on other pages

// Apply now button: added a click event listener
document.getElementById("applyNowButton").addEventListener("click", function() 
{
    // Redirect to login.html
    window.location.href = "/pages/login.html";
}); 

*/


// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document with a smooth animation and easing
function topFunction() {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const startScroll = currentScroll;
    const targetScroll = 0;
    const duration = 500; // You can adjust the duration (in milliseconds)
  
    // Calculate the animation start time
    const startTime = performance.now();
  
    // Define the scroll animation function with easeInOutCubic timing function
    function scrollAnimation(currentTime) {
        const elapsedTime = currentTime - startTime;
  
        // Use easeInOutCubic timing function for a smooth start and end
        const easing = easeInOutCubic(elapsedTime, startScroll, targetScroll - startScroll, duration);
  
        window.scrollTo(0, easing);
  
        if (elapsedTime < duration) {
            // Continue the animation
            requestAnimationFrame(scrollAnimation);
        }
    }
  
    // Start the animation
    requestAnimationFrame(scrollAnimation);
}
  
// Attach the click event listener to the button
mybutton.addEventListener("click", topFunction);
  
// EaseInOutCubic timing function
function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
}
