const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "/";
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (data && data.error) {
        const errorDiv = document.querySelector("#error-message");
        errorDiv.textContent = data.error;
        errorDiv.style.color = "red";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
