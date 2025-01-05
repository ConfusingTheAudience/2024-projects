// Change the view
const ratingList = document.querySelector(".ratings__rates");
const ratingItem = document.querySelectorAll(".ratings__item");

const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");

option1.addEventListener("click", () => {
  ratingList.classList.remove("option2");
  ratingItem.forEach((item) => {
    item.classList.remove("option2");
  });
});

option2.addEventListener("click", () => {
  ratingList.classList.add("option2");
  ratingItem.forEach((item) => {
    item.classList.add("option2");
  });
});

// Delete certain item
const deleteItem = document.querySelectorAll(".ratings__delete");

deleteItem.forEach((delItem) => {
  delItem.addEventListener("click", async (e) => {
    const ratingItem = e.target.closest(".ratings__item");
    const itemName = e.target.getAttribute("data-item");

    try {
      const response = await fetch(`/api/my-rates/${itemName}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        ratingItem.remove();
        location.reload();
      }
    } catch (error) {
      alert("An error occurred while deleting the rating.");
    }
  });
});
