import menu from "./menuData.js";
console.log(menu);

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
console.log(mobileDishes, tabletDishes, desktopDishes);

export function showDishes() {
  let recommendedDishesDiv = document.getElementById("recommendedDishes");
  let heading = document.createElement('h2');
  heading.textContent = 'Våra kunder rekommenderar';
  recommendedDishesDiv.appendChild(heading);


  function appendDishes(dishes) {
    dishes.forEach(function (dishName) {
      let dish = menu.flatMap(category => category.items).find((item) => item.name === dishName);
      if (dish) {
        let dishContainer = createDishContainer(dish);
        recommendedDishesDiv.appendChild(dishContainer);
      }
    });
  }
  console.log(appendDishes);

  // Append differend number of dishes based on platform
  if (window.innerWidth < 768) {
    appendDishes(mobileDishes);
    let menuButton = document.createElement('button');
  menuButton.classList.add('menu-button');
  let menuButtonText = document.createElement('h4');
  menuButtonText.textContent = 'Meny';
  menuButton.appendChild(menuButtonText);
  recommendedDishesDiv.appendChild(menuButton)
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    appendDishes(tabletDishes);
  } else {
    appendDishes(desktopDishes);
  }
  
}

function createDishContainer(menuItem) {

    console.log('Creating dish container');

    let dishContainer = document.createElement('div');
    dishContainer.classList.add('dish');

    let dishTitle = document.createElement('h3');
    dishTitle.textContent = menuItem.name;

    let dishDescription = document.createElement('p');
    dishDescription.textContent = menuItem.description;

    dishContainer.appendChild(dishTitle);
    dishContainer.appendChild(dishDescription);

    console.log(dishContainer);
    return dishContainer;
}

document.addEventListener('DOMContentLoaded', () => {
    showDishes();
  
    // Add allergy text and button
    let allergiesDiv = document.getElementById("allergies");
    let allergyText = document.createElement('h3');
    allergyText.textContent = 'Allergier? Fråga oss:';
    allergiesDiv.appendChild(allergyText);
  
    let contactButton = document.createElement('button');
    contactButton.classList.add('contact-button');

    let contactButtonText = document.createElement('h3');
    contactButtonText.textContent = 'Kontakt';
    contactButton.appendChild(contactButtonText);
    allergiesDiv.appendChild(contactButton);
  });











