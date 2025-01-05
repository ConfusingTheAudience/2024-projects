import { hideMessage } from "./utils/profileMessage.js";

const updateMessage = document.getElementById("update-message");
const deleteMessage = document.getElementById("delete-message");
const updateForm = document.getElementById("update-form");
const deleteVotesForm = document.getElementById("delete-votes-form");

// Update
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;

  fetch("/api/profile/update-profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      username,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        updateMessage.textContent = data.error;
        updateMessage.style.color = "red";
        updateMessage.style.display = "inline-block";
        hideMessage(updateMessage, 3000);
      } else {
        updateMessage.textContent = "Profile updated successfully!";
        updateMessage.style.color = "#4caf50";
        updateMessage.style.display = "inline-block";
        hideMessage(updateMessage, 1500);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Delete
deleteVotesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("/api/profile/delete-votes", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      deleteMessage.style.display = "inline-block";
      hideMessage(deleteMessage, 1500);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error deleting your votes.");
    });
});
