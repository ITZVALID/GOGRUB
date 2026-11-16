// FUNCTION:
// Hides all screens, then shows the screen matching screenId.
function showScreen(screenId) {
  // Selects all elements with the class "screen"
  let screens = document.querySelectorAll(".screen");

  // Loops through each screen and adds the "hidden" class
  screens.forEach(function(screen) {
    screen.classList.add("hidden");
  });

  // Removes the "hidden" class from the chosen screen so it appears
  document.getElementById(screenId).classList.remove("hidden");
}
// ARRAY:
// Stores all food items the user adds to their cart.
let cart = [];

// FUNCTION:
// Adds a food item object to the cart array and notifies the user.
function addToCart(itemName, itemPrice) {
  // Adds an object with name and price to the cart array
  cart.push({ name: itemName, price: itemPrice });

  // Gives immediate feedback that the item was added
  alert(itemName + " added to your cart!");
}
// FUNCTION:
// Displays every item in the cart array and calculates the total price.
function updateCartDisplay() {
  let cartItemsDiv = document.getElementById("cartItems");
  let cartTotalEl = document.getElementById("cartTotal");

  // Clear old items before rebuilding the list
  cartItemsDiv.innerHTML = "";
  let total = 0;

  // Show a message if no items have been added yet
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    // Loop through each item in the cart array
    cart.forEach(function(item) {
      total += item.price;

      // Add a row showing the item's name and formatted price
      cartItemsDiv.innerHTML +=
        '<div class="cart-item"><span>' + item.name + '</span><span>$' + item.price.toFixed(2) + '</span></div>';
    });
  }

  // Update the total text on the screen
  cartTotalEl.textContent = "Total: $" + total.toFixed(2);
}
// FUNCTION:
// Hides all screens, then shows the screen matching screenId.
function showScreen(screenId) {
  // Selects all elements with the class "screen"
  let screens = document.querySelectorAll(".screen");

  // Loops through each screen and adds the "hidden" class
  screens.forEach(function(screen) {
    screen.classList.add("hidden");
  });

  // Removes the "hidden" class from the chosen screen so it appears
  document.getElementById(screenId).classList.remove("hidden");

  // Refresh the cart list whenever the Cart screen is opened
  if (screenId === "cartScreen") {
    updateCartDisplay();
  }
}
// FUNCTION:
// Simulates placing an order, clears the cart array, and refreshes the Cart screen.
function checkoutOrder() {
  // Check if the cart is empty before checking out
  if (cart.length === 0) {
    alert("Your cart is empty! Add some food before checking out.");
    return;
  }

  // Confirm the simulated order
  alert("Order placed! Thank you for using GOGRUB.");

  // Reset the cart array back to empty
  cart = [];

  // Refresh the Cart screen so items and total reset to $0.00
  updateCartDisplay();
}