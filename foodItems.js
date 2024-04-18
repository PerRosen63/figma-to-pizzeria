import menu from './menuData.js';

export function renderMenu() {
    const menuSection = document.getElementById('menu');
    const menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Meny';

    menuSection.appendChild(menuHeading);

    menu.forEach(category => {
        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category.category;
        menuSection.appendChild(categoryHeading);

        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('menu-container');

        category.items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            menuItem.appendChild(itemName);

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            menuItem.appendChild(itemDescription);

            categoryContainer.appendChild(menuItem);
           
           
        });
        menuSection.appendChild(categoryContainer);
    });
}
