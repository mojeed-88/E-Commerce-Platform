// Initialize an empty cart
let cart = [];

// Function to add a product to the cart
function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    updateCartCount();
    alert(`${productName} added to cart!`);
}

// Function to update the cart count in the header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to display product details
function showProductDetails(productName, price, imageSrc) {
    const detailsContainer = document.getElementById('product-details');
    detailsContainer.innerHTML = `
        <h2>${productName}</h2>
        <img src="${imageSrc}" alt="${productName}" style="max-width: 100%; height: auto;">
        <p>Price: $${price}</p>
        <button onclick="addToCart('${productName}', ${price})">Add to Cart</button>
    `;
    detailsContainer.style.display = 'block';
}

// Function to close the product details modal
function closeProductDetails() {
    const detailsContainer = document.getElementById('product-details');
    detailsContainer.style.display = 'none';
}

