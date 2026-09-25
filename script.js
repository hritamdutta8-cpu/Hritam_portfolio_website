const contactForm = document.getElementById("contact-form");
const formResponse = document.getElementById("form-response");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    formResponse.textContent = `Thank you, ${name}! I will reply to you soon.`;
    contactForm.reset();
});
