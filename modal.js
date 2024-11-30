// ! modal script - modal is commented out at the moment for easier testing

// Wait for the DOM to fully load
window.onload = () => {
    // Get the modal element and the dismiss button
    const modal = document.getElementById("my-modal");
    const startBtn = document.getElementById("start-btn");


    // Display the modal when the page loads
    modal.style.display = "block";

    // When the user clicks the dismiss button, close the modal
    startBtn.onclick = () => {
        modal.style.display = "none";
    };

    // When the user clicks the close button (x), close the modal
    closeBtn.onclick = () => {
        modal.style.display = "none";
    };

    // If the user clicks anywhere outside the modal, close it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
};
