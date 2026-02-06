let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD ITEM
function addToCart(name, price, image) {
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Item added to cart");
}

// CART COUNT
function updateCartCount() {
    let count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}

// GO TO CART PAGE
function goToCart() {
    window.location.href = "cart.html";
}

// LOAD CART PAGE
function loadCartPage() {
    let cartItems = document.getElementById("cart-items");
    let priceBox = document.getElementById("price-details");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <img src="${item.image}">
            <div>
                <h3>${item.name}</h3>
                <p>Rs.${item.price}</p>
                <button onclick="removeItem(${index})">REMOVE</button>
            </div>
        </div>`;
    });

    priceBox.innerHTML = `
        <h3>PRICE DETAILS</h3>
        <p>Total Items: ${cart.length}</p>
        <p>Total Amount: Rs.${total}</p>
        <button class="place-order">PLACE ORDER</button>
    `;
}

// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
}

// run when page loads
updateCartCount();
