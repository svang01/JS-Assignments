// Initialize cart in localStorage
function initializeCart() {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }
  
  // Add item to the cart
  function addItem(item) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // Remove item from the cart
  function removeItem(itemId) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const updatedCart = cart.filter(item => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }
  
  // Display cart contents in the console
  function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart);
  }
  
  // Add event listener for adding items to the cart
  const addItemForm = document.getElementById("addItemForm");
  addItemForm.addEventListener("submit", function(event){
    event.preventDefault();
  
    const itemName = document.getElementById("itemName").value;
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);
    const itemId = new Date().getTime();
  
    addItem({ id: itemId, name: itemName, price: itemPrice });
  });
  
  // Add event listener for displaying cart contents
  const displayCartButton = document.getElementById("displayCartButton");
  displayCartButton.addEventListener("click", displayCart);
  
  // Initialize cart
  initializeCart();