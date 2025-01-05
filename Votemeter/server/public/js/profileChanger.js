const profileBtn = document.getElementById("my-profile-btn");
const settingsBtn = document.getElementById("settings-btn");
const profile = document.getElementById("profile-info");
const settings = document.getElementById("settings-info");

function switchSection(showProfile) {
  if (showProfile) {
    profile.style.display = "block";
    settings.style.display = "none";
    profileBtn.classList.add("active");
    settingsBtn.classList.remove("active");
  } else {
    profile.style.display = "none";
    settings.style.display = "block";
    settingsBtn.classList.add("active");
    profileBtn.classList.remove("active");
  }
}

profileBtn.addEventListener("click", function () {
  switchSection(true);
  location.reload();
});

settingsBtn.addEventListener("click", function () {
  switchSection(false);
});
