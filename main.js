// Elements
const heartButton = document.getElementById('heartButton');
const letterContainer = document.getElementById('letterContainer');

// Show the letter and unfold it on heart button click
heartButton.addEventListener('click', () => {
  letterContainer.style.display = 'block'; // Show the letter
  letterContainer.classList.add('unfold'); // Unfold it
  heartButton.style.opacity = '0'; // Smoothly hide the heart button
  setTimeout(() => {
    heartButton.style.display = 'none'; // Completely hide the heart button after transition
  }, 300); // Match the duration of the opacity transition
});

// Toggle letter open/close on click
letterContainer.addEventListener('click', () => {
  // Toggle unfold class
  letterContainer.classList.toggle('unfold');

  // Show the heart button if the letter is closed
  if (!letterContainer.classList.contains('unfold')) {
    heartButton.style.display = 'block'; // Show the heart button
    setTimeout(() => {
      heartButton.style.opacity = '1'; // Smoothly reveal the heart button
    }, 10); // Small delay for the transition effect
  } else {
    heartButton.style.opacity = '0'; // Smoothly hide the heart button if the letter is open
  }
});
