document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Display the success message
    document.getElementById('successMessage').style.display = 'block';
});
