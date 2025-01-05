const categoryFilters = document.querySelectorAll(".filter__list"); // filters Action etc.
      const itemsContainer = document.querySelector("#items"); // item container
      const allCloseBtns = document.querySelectorAll(".filter__close"); // All close buttons icons
      let activeFilters = []; // Active filters (categories)
      const searchInput = document.querySelector(".searchBar__input"); // Search input field

      // Handle category filter logic
      categoryFilters.forEach((filter) => {
        filter.addEventListener("click", (e) => {
          const selectedCategory = filter.textContent.trim();

          // If user picks "All", reset everything and show all items
          if (selectedCategory === "All") {
            activeFilters = [];
            categoryFilters.forEach((fil) => {
              fil.classList.remove("addFilterClass");
            });
            allCloseBtns.forEach((forCloseButton) => {
              forCloseButton.style.display = "none";
            });
          } else {
            // Add / Delete filter logic
            if (activeFilters.includes(selectedCategory)) {
              activeFilters = activeFilters.filter(
                (filter) => filter !== selectedCategory
              );
              filter.classList.remove("addFilterClass");
              const closeBtn = filter
                .closest("li")
                .querySelector(".filter__close");
              closeBtn.style.display = "none";
            } else {
              activeFilters.push(selectedCategory);
              filter.classList.add("addFilterClass");
              const closeBtn = filter
                .closest("li")
                .querySelector(".filter__close");
              closeBtn.style.display = "block";
            }
          }

          // Filter items based on active filters and search text
          filterItems();
        });
      });

      // Handle search bar functionality
      searchInput.addEventListener("input", (e) => {
        filterItems();
      });

      // Function to filter items based on active filters and search text
      function filterItems() {
        const searchText = searchInput.value.toLowerCase();
        const items = document.querySelectorAll(".items__list");

        items.forEach((item) => {
          const itemTitle = item
            .querySelector(".items__title")
            .textContent.toLowerCase();
          const itemTypes = [];
          const types = item.querySelectorAll(".type");

          for (let i = 0; i < types.length; i++) {
            itemTypes.push(types[i].textContent.trim());
          }

          // Check if the item matches the active filters and search text
          const matchesSearchText = itemTitle.includes(searchText);
          const matchesCategory =
            activeFilters.length === 0 ||
            activeFilters.some((filter) => itemTypes.includes(filter));

          // Show or hide the item based on both conditions
          if (matchesSearchText && matchesCategory) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }