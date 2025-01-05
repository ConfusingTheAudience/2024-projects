window.addEventListener("scroll", function () {
  const nav = document.getElementById("nav-sticky");

  // if more than 50px then activate
  if (window.scrollY > 50) {
    nav.classList.add("transparent");
  } else {
    nav.classList.remove("transparent");
  }
});

// NOTE
// with navEffect.css used in URLS: Home, My Rates
