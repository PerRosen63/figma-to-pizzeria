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

export function showDishes() {
  let recommendedDishesDiv = document.getElementById("recommendedDishes");

  function appendDishes(dishes) {
    dishes.forEach(function (dishName) {
      let dish = menu.find((item) => item.name === dishName);
      if (dish) {
        let dishContainer = createDishContainer(dish);
        recommendedDishesDiv.appendChild(dishContainer);
      }
    });
  }

  // Append differend number of dishes based on platform
  if (window.innerWidth < 768) {
    appendDishes(mobileDishes);
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    appendDishes(tabletDishes);
  } else {
    appendDishes(desktopDishes);
  }
}

function createDishContainer(dish) {
    let container = document.createElement('div');
    let heading = document.createElement('h2');
    heading.textContent = 'Våra kunder rekommenderar';
    container.appendChild(heading);
    
    let dishContainer = document.createElement('div');
    dishContainer.classList.add('dish');

    let dishTitle = document.createElement('h2');
    dishTitle.textContent = dish.name;

    let dishDescription = document.createElement('p');
    dishDescription.textContent = dish.description;

    dishContainer.appendChild(dishTitle);
    dishContainer.appendChild(dishDescription);

    return dishContainer;
}
document.addEventListener('DOMContentLoaded', showDishes);