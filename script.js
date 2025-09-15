const themeToggle =
document.getElementById("themeToggle")
themeToggle.addEventListener("click",()=> {
    document.body.classList.toggle("dark");
});
//Handle Contact Form
const form =
document.getElementById("contactForm");
const message =
document.getElementById("formMessage");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    message.textContent =" thank you for your message.";
    form.reset();
});

