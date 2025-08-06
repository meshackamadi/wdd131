// ====== 1. Footer Date Logic ======
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  const visible = navMenu.style.display === "flex";
  navMenu.style.display = visible ? "none" : "flex";
  hamburger.textContent = visible ? "☰" : "✖";
});