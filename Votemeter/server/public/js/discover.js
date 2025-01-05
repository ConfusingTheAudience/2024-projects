const btns = document.querySelectorAll(".rate__button");

btns.forEach((button) => {
  button.addEventListener("click", function () {
    const item = button.getAttribute("data-item");
    const rating = Number(button.getAttribute("data-rating"));

    fetch("/api/discover/rate-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: item,
        rating: rating,
      }),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

const title = document.querySelector(".discover__title");
const displayer = document.querySelector("#displayer");

displayer.addEventListener("scroll", () => {
  if (displayer.scrollTop > 100) {
    title.style.opacity = "0";
  } else if (displayer.scrollTop > 50) {
    title.style.opacity = "0.5";
  } else {
    title.style.opacity = "1";
  }
});

import { hideMessage2 } from "./utils/profileMessage.js";

btns.forEach((button) => {
  button.addEventListener("click", function () {
    const itemName = button.getAttribute("data-item");
    const rating = parseInt(button.getAttribute("data-rating"));

    // Block rate btns inside clicked item
    const itemButtons = button.closest("li").querySelectorAll(".rate__button");
    itemButtons.forEach((btn) => {
      btn.disabled = true;
    });

    fetch("/api/discover/add-rate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: itemName,
        rating: rating,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const avgRating = data.averageRating;
        const totalVotes = data.totalVotes;

        const averageElement = button
          .closest("li")
          .querySelector(".items__average");
        if (averageElement) {
          averageElement.textContent = `Av Rating: ${avgRating}`;
        }

        const totalVotesElement = button
          .closest("li")
          .querySelector(".items__total");
        if (totalVotesElement) {
          totalVotesElement.textContent = `Votes: ${totalVotes}`;
        }

        itemButtons.forEach((btn) => {
          btn.style.backgroundColor = "";
          btn.style.color = "";
        });

        button.style.backgroundColor = "var(--main-color)";
        button.style.color = "white";

        const itemMessage = button
          .closest("li")
          .querySelector(".items__message");
        if (itemMessage) {
          itemMessage.style.visibility = "visible";
          hideMessage2(itemMessage, itemButtons, 1500);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
