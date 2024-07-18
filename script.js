document.addEventListener('DOMContentLoaded', function() {
    // Example: Integrate Calendly scheduling
    const calendlyButton = document.createElement('button');
    calendlyButton.innerText = 'Schedule a Consultation Call';
    calendlyButton.onclick = function() {
        window.location.href = 'https://calendly.com/your-scheduling-link';
    };
    document.getElementById('consultation').appendChild(calendlyButton);
});
