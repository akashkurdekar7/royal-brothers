document.addEventListener("DOMContentLoaded", () => {
  const menuOpen = document.getElementById("menu-open");
  const leftMenu = document.getElementById("left-menu");
  const menuClose = document.getElementById("menu-close");
  const popupOpen = document.getElementById("popup-open");
  const popupClose = document.getElementById("popup-close");
  const locationMenu = document.getElementById("location-popup");
  const searchInput = document.getElementById("search-input");
  const clearSearchButton = document.getElementById("clear-search");
  const darkBgc = document.getElementById("darkbgc");

  // Toggle left menu
  menuOpen.addEventListener("click", () => {
    leftMenu.style.display = "block";
    leftMenu.style.transition = "height 50s linear";
    document.body.classList.add("no-scroll");
    darkBgc.style.display = "block";
  });
  menuClose.addEventListener("click", () => {
    leftMenu.style.display = "none";
    document.body.classList.remove("no-scroll");
    darkBgc.style.display = "none";
  });

  // Toggle location popup
  popupOpen.addEventListener("click", () => {
    locationMenu.style.display = "block"; // Show popup
    document.body.classList.add("no-scroll"); // Prevent body scroll
    darkBgc.style.display = "block";
  });
  popupClose.addEventListener("click", () => {
    locationMenu.style.display = "none"; // Hide popup
    document.body.classList.remove("no-scroll"); // Allow body scroll
    darkBgc.style.display = "none";
  });

  // Clear search input
  clearSearchButton.addEventListener("click", () => {
    searchInput.value = "";
  });

  // City data
  const cities = [
    {
      name: "Paris",
      image: "https://images.pexels.com/674010/pexels-photo-674010.jpeg",
    },
    {
      name: "New York",
      image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    },
    {
      name: "Tokyo",
      image: "https://images.pexels.com/photos/45816/pexels-photo-45816.jpeg",
    },
    {
      name: "London",
      image:
        "https://images.pexels.com/photos/1005314/pexels-photo-1005314.jpeg",
    },
    {
      name: "Sydney",
      image:
        "https://images.pexels.com/photos/1239294/pexels-photo-1239294.jpeg",
    },
    {
      name: "Rome",
      image: "https://images.pexels.com/photos/260407/pexels-photo-260407.jpeg",
    },
    {
      name: "Barcelona",
      image: "https://images.pexels.com/photos/269851/pexels-photo-269851.jpeg",
    },
    {
      name: "Dubai",
      image:
        "https://images.pexels.com/photos/3969114/pexels-photo-3969114.jpeg",
    },
    {
      name: "Amsterdam",
      image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    },
    {
      name: "Istanbul",
      image:
        "https://images.pexels.com/photos/1673708/pexels-photo-1673708.jpeg",
    },
  ];

  // Load cities into the card container
  function loadCities() {
    const container = document.getElementById("city-cards-container");
    const template = document.getElementById("city-card-template");

    cities.forEach((city) => {
      const card = template.cloneNode(true);
      const img = card.querySelector("img");
      img.src = city.image;
      img.alt = city.name;

      const name = card.querySelector("p");
      name.textContent = city.name;

      card.style.display = "block"; // Show card
      container.appendChild(card); // Add card to container
    });
  }

  loadCities();
});
