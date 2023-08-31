// script.js

// Function to show a confirmation message
function showConfirmation() {
    if (confirm("Are you sure you want to place an order online?")) {
        alert("Your order has been placed!");
    } else {
        alert("Order canceled.");
    }
}

// Add an event listener to the "Order Online" button
document.addEventListener("DOMContentLoaded", function () {
    var orderButton = document.querySelector(".btn-primary");
    if (orderButton) {
        orderButton.addEventListener("click", showConfirmation);
    }
});
