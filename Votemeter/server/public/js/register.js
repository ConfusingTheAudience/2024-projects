const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const email = document.querySelector("#email").value;
  const category = document.querySelector(
    'input[name="category"]:checked'
  ).value;

  fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      email,
      category,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data);
        console.log(data.error);
        const errorDiv = document.querySelector("#error-message");
        errorDiv.textContent = data.error;
        errorDiv.style.color = "red";
      } else {
        window.location.href = "/login";
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});

// Video change
const categoryRadios = document.querySelectorAll('input[name="category"]');
const backgroundVideo = document.getElementById("background-video");

categoryRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    let videoSrc = "";

    if (document.getElementById("category-games").checked) {
      videoSrc = "/videos/games.mp4";
    } else if (document.getElementById("category-music").checked) {
      videoSrc = "/videos/music.mp4";
    } else if (document.getElementById("category-art").checked) {
      videoSrc = "/videos/art.mp4";
    }

    backgroundVideo.src = videoSrc;
    backgroundVideo.load(); // Reload video source when it changes
    backgroundVideo.play(); // Play the new video immediately
  });
});
