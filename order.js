$(document).ready(function() {
    // Get references to the necessary elements
    var decrementButton = $("#decrement");
    var incrementButton = $("#increment");
    var quantityInput = $("#quantity");
    var checkoutButton = $("#checkout");
  
    // Set initial quantity value
    var quantity = 0;
  
    // Function to increment the quantity
    incrementButton.on("click", function() {
      quantity++;
      quantityInput.val(quantity);
    });
  
    // Function to decrement the quantity (minimum value is 0)
    decrementButton.on("click", function() {
      if (quantity > 0) {
        quantity--;
        quantityInput.val(quantity);
      }
    });
  
    // Function to handle the checkout process
    checkoutButton.on("click", function() {
      // Perform any necessary actions for the checkout process
      // For example, display a confirmation message or redirect to a payment page
      alert("Order confirmed! Thank you for your purchase.");
    });
  });
// Function to handle the checkout process
function checkout() {
    // Redirect to order.html
    window.location.href = "order.html";
  }
    