import menu from "./menuData.js";

const mobileDishes = ["Kebabpizza", "Sourcream & Onion Burger"];
const tabletDishes = [
  "Kebabpizza",
  "Sourcream & Onion Burger",
  "Köttfest Xtra",
  "Grillspett - Kyckling",
  "Falafelrulle",
  "Grillspett - Vegetarisk",
];
const desktopDishes = [
  "Kebabpizza",
  "Sourcream & Onion Burger",
  "Köttfest Xtra",
  "Grillspett - Kyckling",
  "Falafelrulle",
  "Grillspett - Vegetarisk",
];

function createMenuButton() {
  let menuButton = document.createElement("button");
  menuButton.classList.add("menu-button");
  let menuButtonText = document.createElement("p");
  menuButtonText.textContent = "Meny";
  menuButton.appendChild(menuButtonText);
  return menuButton;
}
function createDailyContent() {
  let dailyDiv = document.getElementById("daily");
  let dailyText1 = document.createElement("h4");
  dailyText1.textContent = "Dagens lunch 99:-";
  let dailyText2 = document.createElement("p");
  dailyText2.textContent = "må-fr 11-16";
  dailyDiv.appendChild(dailyText1);
  dailyDiv.appendChild(dailyText2);
}

function createAllergiesDiv() {
  let allergiesDiv = document.getElementById("allergies");
  let allergyText = document.createElement("h4");
  allergyText.textContent = "Allergier? Fråga oss:";
  allergiesDiv.appendChild(allergyText);

  let contactButton = document.createElement("button");
  contactButton.classList.add("contact-button");

  let contactButtonText = document.createElement("p");
  contactButtonText.textContent = "Kontakt";
  contactButton.appendChild(contactButtonText);
  allergiesDiv.appendChild(contactButton);
}

function addFreshContent() {
  let freshDiv = document.getElementById("fresh");
  let freshText = document.createElement("h2");
  freshText.textContent = "Alltid färska råvaror!";
  freshDiv.appendChild(freshText);
}

function addAllDishesContent() {
  let allDishesDiv = document.getElementById("allDishes");
  let allDishesText = document.createElement("h4");
  allDishesText.textContent = "Alla våra rätter:";
  allDishesDiv.appendChild(allDishesText);

  let menuButton = createMenuButton();
  allDishesDiv.appendChild(menuButton);
}

function createDishContainer(menuItem) {
  let dishContainer = document.createElement("div");
  dishContainer.classList.add("dish");

  let dishTitle = document.createElement("h4");
  dishTitle.textContent = menuItem.name;

  let dishDescription = document.createElement("p");
  dishDescription.textContent = menuItem.description;

  dishContainer.appendChild(dishTitle);
  dishContainer.appendChild(dishDescription);


  return dishContainer;
}

export function showDishes() {
  let recommendedDishesDiv = document.getElementById("recommendedDishes");
  let heading = document.createElement("h2");
  heading.textContent = "Våra kunder rekommenderar";
  recommendedDishesDiv.appendChild(heading);

  function appendDishes(dishes) {
    dishes.forEach(function (dishName) {
      let dish = menu
        .flatMap((category) => category.items)
        .find((item) => item.name === dishName);
      if (dish) {
        let dishWrapper = createDishContainer(dish);
        recommendedDishesDiv.appendChild(dishWrapper);
      }
    });
  }

  // Append differend number of dishes based on platform
  if (window.innerWidth < 768) {
    appendDishes(mobileDishes);
    let menuButton = createMenuButton();
    recommendedDishesDiv.appendChild(menuButton);
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    appendDishes(tabletDishes);
  } else {
    appendDishes(desktopDishes);
  }
}

function showContentByPlatform() {
  let windowWidth = window.innerWidth;

  if (window.innerWidth < 768) {
    createDailyContent();
    showDishes();
    createAllergiesDiv();
  } else if (windowWidth >= 768 && windowWidth < 1024) {
    showDishes();
    createDailyContent();
    createAllergiesDiv();
    addFreshContent();
    addAllDishesContent();
    //document.getElementById("allDishes").style.display = "block";
    //document.getElementById("allDishes").style.display = "block";
  } else {
    showDishes();
    createDailyContent();
    createAllergiesDiv();
    addFreshContent();
    addAllDishesContent();
    //document.getElementById("allDishes").style.display = "block";
    //document.getElementById("allDishes").style.display = "block";
  }
}


document.addEventListener("DOMContentLoaded", () => {
    showContentByPlatform();
});
/*
window.addEventListener("resize", () => {
  showContentByPlatform();
});
*/