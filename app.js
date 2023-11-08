// Get all the buttons with the "grid" class
const buttons = document.querySelectorAll('.grid');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the sound file associated with the button
    const soundFile = button.getAttribute('data-sound');

    // Create an Audio object and play the sound
    const audio = new Audio(soundFile);
    audio.play();
  });
});
