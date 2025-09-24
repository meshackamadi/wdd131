const contactForm = document.getElementById("contactForm");
const formFeedback = document.getElementById("formFeedback");

// Load previous form data
window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("lastContact")) || {};
  document.getElementById("name").value = saved.name || "";
  document.getElementById("email").value = saved.email || "";
  document.getElementById("message").value = saved.message || "";
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name && email && message){
    formFeedback.textContent = `Thank you, ${name}! Your message has been received.`;
    // Save form data in localStorage
    localStorage.setItem("lastContact", JSON.stringify({name, email, message}));
    contactForm.reset();
  } else {
    formFeedback.textContent = "Please fill in all fields.";
  }
});
