const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const message = document.getElementById('input-message').value;
    const now = new Date().toLocaleString();

    document.getElementById('output-name').innerText = name;
    document.getElementById('output-email').innerText = email;
    document.getElementById('output-message').innerText = message;
    document.getElementById('current-time').innerText = now;

    form.reset();
});

welcomeMessage();

// Welcome Message Function
function welcomeMessage() {
    // Show Popup
    let name = prompt("Welcome to Lumine Atelier! What is your name?");

    // validate input
    if (name == null || name.trim() === "") {
        // If user cancels or enters an empty name, use "Guest" as default
        name = "Guest";
    }

    // Display Welcome Message
    document.getElementById('user-greeting').innerHTML = `Hello, ${name}! Welcome to Lumine Atelier.`;

    const greetingElement = document.getElementById('user-greeting');
    if (greetingElement) {
            greetingElement.innerHTML = `Hi, ${name}`;
    }
}