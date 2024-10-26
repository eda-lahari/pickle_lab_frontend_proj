document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Display the thank-you message
    document.getElementById('thank-you-message').style.display = 'block';

    // Optionally, clear the form fields after submission
    document.getElementById('feedbackForm').reset();
});
