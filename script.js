// script.js
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        
        if (name && email && message) {
            alert("Thank you for contacting us, " + name + "!");
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
});
