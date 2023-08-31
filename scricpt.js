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
