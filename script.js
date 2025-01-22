// Function to trigger animation
function triggerAnimation() {
    const animatedElement = document.getElementById("animatedElement");
    animatedElement.classList.add("slide-in");
    
    // Reset the animation after it finishes to allow re-triggering
    animatedElement.addEventListener("animationend", () => {
      animatedElement.classList.remove("slide-in");
    });
  }
  
  // Attach the animation function to a button click
  document.getElementById("animateButton").addEventListener("click", triggerAnimation);
  
  // Function to toggle the modal visibility
  function toggleModal() {
    const modal = document.getElementById("myModal");
    modal.classList.toggle("hidden");
  }
  
  // Attach the toggle function to a button click
  document.getElementById("toggleButton").addEventListener("click", toggleModal);
  
  // Close the modal when the "close" button is clicked
  document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.getElementById("closeButton");
    closeButton.addEventListener("click", () => {
      const modal = document.getElementById("myModal");
      modal.classList.add("hidden"); // Hide the modal when the close button is clicked
    });
  });
  