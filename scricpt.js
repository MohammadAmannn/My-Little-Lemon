// Add a simple hover effect to the menu items
const menuItems = document.querySelectorAll('h2');
menuItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#007bff';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '#555';
    });
});
// Get references to the relevant HTML elements
const selectedMenuElement = document.getElementById('selectedMenu');
const menuSelectElement = document.getElementById('menu');

// Add an event listener to update the selected menu option
menuSelectElement.addEventListener('change', function () {
    selectedMenuElement.textContent = menuSelectElement.value;
});
