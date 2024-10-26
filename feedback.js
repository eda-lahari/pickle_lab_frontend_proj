document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thank-you-message').style.display = 'block';
    document.getElementById('feedbackForm').reset();
});
