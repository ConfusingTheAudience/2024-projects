const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("profile-link");
const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");
const discoverLink = document.getElementById("discover-link");
const myRatesLink = document.getElementById("my-rates-link");

const currentPath = window.location.pathname;

if (currentPath === "/") {
  // I need to check if homeLink exist because I'm hiding it while user is logged in so classList gives me console error
  if(homeLink){
    homeLink.classList.add("navigation__link-active");
  }
} else if (currentPath === "/profile") {
  aboutLink.classList.add("navigation__link-active");
} else if (currentPath === "/login") {
  loginLink.classList.add("navigation__link-active");
} else if (currentPath === "/register") {
  registerLink.classList.add("navigation__link-active");
} else if (currentPath === "/discover") {
  discoverLink.classList.add("navigation__link-active");
} else if (currentPath === "/my-rates") {
  myRatesLink.classList.add("navigation__link-active");
}

// NOTE
// I'm changing current link color
// Navigation color change is based on location.pathname (URL ADDRESS)
