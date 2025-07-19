document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");
  const menuButton = document.getElementById("menu-button");
  const navMenu = document.getElementById("nav-menu");

  // Dynamic footer year and last modified
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;

  const lastModified = document.lastModified;
  modifiedSpan.textContent = lastModified;

  // Hamburger toggle
  menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    menuButton.textContent = navMenu.classList.contains("show-menu") ? '✕' : '☰';
  });
});
