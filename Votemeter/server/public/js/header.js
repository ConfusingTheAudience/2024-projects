document.getElementById("menu-toggle").addEventListener("click", function () {
  const nav = document.getElementById("navigation-menu");
  const toggleButton = document.getElementById("menu-toggle");

  // Toggle the navigation menu
  nav.classList.toggle("active");

  // Toggle between hamburger and close icon
  toggleButton.classList.toggle("open");
});
