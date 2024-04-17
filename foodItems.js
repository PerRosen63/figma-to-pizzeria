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

        category.items.forEach(item => {
            const menuItem = document.createElement('div');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            menuItem.appendChild(itemName);

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            menuItem.appendChild(itemDescription);

            menuSection.appendChild(menuItem);
           
           
        });
    });
}
