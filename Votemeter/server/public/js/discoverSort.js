document.addEventListener("DOMContentLoaded", () => {
  const sortMethods = document.querySelectorAll(".filter__sort");
  const itemsContainer = document.querySelector("#items");

  // Function sort by title
  const sortItemsByTitle = (order) => {
    const items = Array.from(itemsContainer.children);

    items.sort((a, b) => {
      const titleA = a.querySelector(".items__title").textContent.toLowerCase();
      const titleB = b.querySelector(".items__title").textContent.toLowerCase();

      if (order === "asc") {
        return titleA.localeCompare(titleB); // A-Z
      } else {
        return titleB.localeCompare(titleA); // Z-A
      }
    });

    items.forEach((item) => itemsContainer.appendChild(item));
  };

  // Function sort by avg. score
  const sortItemsByRating = () => {
    const items = Array.from(itemsContainer.children);
    console.log(items, "ITEMS W BY RATING");

    items.sort((a, b) => {
      const ratingA = parseFloat(
        a.querySelector(".items__average").textContent.split(":")[1].trim()
      );
      console.log(ratingA, "VOTES A w BY RATING");

      const ratingB = parseFloat(
        b.querySelector(".items__average").textContent.split(":")[1].trim()
      );
      console.log(ratingB, "VOTES B w BY RATING");

      return ratingB - ratingA;
    });

    items.forEach((item) => itemsContainer.appendChild(item));
  };

  // Function sort by votes
  const sortItemsByVotes = () => {
    const items = Array.from(itemsContainer.children);
    console.log(items, "ITEMS W BY VOTES");

    items.sort((a, b) => {
      const votesA = parseInt(
        a.querySelector(".items__total").textContent.split(":")[1].trim()
      );
      console.log(votesA, "VOTES A w BY VOTES");
      const votesB = parseInt(
        b.querySelector(".items__total").textContent.split(":")[1].trim()
      );
      console.log(votesB, "VOTES B w BY VOTES");

      return votesB - votesA;
    });

    items.forEach((item) => itemsContainer.appendChild(item));
  };

  // Sort logic
  sortMethods.forEach((method) => {
    method.addEventListener("click", (e) => {
      const selected = e.target;
      const selectedSortMethod = e.target.textContent.trim();
      console.log(selectedSortMethod, "SELECTED METHOD");

      // To clear styles for clicked sort method
      sortMethods.forEach((m) => {
        m.classList.remove("addSortClass");
      });
      selected.classList.add("addSortClass");

      if (selectedSortMethod === "A-Z") {
        sortItemsByTitle("asc");
      } else if (selectedSortMethod === "Z-A") {
        sortItemsByTitle("desc");
      } else if (selectedSortMethod === "Best ratings") {
        sortItemsByRating();
      } else if (selectedSortMethod === "Most votes") {
        sortItemsByVotes();
      }
    });
  });
});
