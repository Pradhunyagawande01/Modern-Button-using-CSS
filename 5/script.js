// Function to trigger the click animation
function animateClick(button) {
    button.classList.add('clicked');
    
    // Remove the class after animation completes to reset
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 1000); // Duration matches fade-out animation
}
