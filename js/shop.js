  // Products Data
  const products = {
    electronics: [
        { id: 'e1', name: 'Bird Pendent', price: 49.99, rating: 4.5, image: '/images/pendant.webp' },
        { id: 'e2', name: 'Mwana Pwo mask ', price: 129.99, rating: 4.7, image: '/images/mwana.jpg' },
        { id: 'e3', name: 'Akan Gold Pectoral', price: 79.99, rating: 4.3, image: '/images/akan.jpg' },
        { id: 'e4', name: 'King Tutankhamun', price: 299.99, rating: 4.8, image: '/images/king.jpg' },
        { id: 'e5', name: 'Ancient Egyptian', price: 34.99, rating: 4.6, image: '/images/amulets.jpg' }
    ],
    fashion: [
        { id: 'f1', name: 'Local Slippers', price: 19.99, rating: 4.2, image: '/images/slippers.jpg' },
        { id: 'f2', name: 'Local CLoth (Kente)', price: 59.99, rating: 4.6, image: '/images/kente.jpg' },
        { id: 'f3', name: 'African print Hand-fan', price: 29.99, rating: 4.4, image: '/images/fan.jpg' },
        { id: 'f4', name: 'Necklace', price: 29.99, rating: 4.5, image: '/images/necklace.jpg' },
        { id: 'f5', name: 'Local wear', price: 24.99, rating: 4.3, image: '/images/slippers2.jpg' }
    ],
    home: [
        { id: 'h1', name: 'Local Drums', price: 69.99, rating: 4.7, image: '/images/drums.jpg' },
        { id: 'h2', name: 'Ancient mugu Figure', price: 49.99, rating: 4.3, image: '/images/statue.jpg' },
        { id: 'h3', name: 'Wood Craft - Oyo', price: 79.99, rating: 4.5, image: '/images/rocky.jpeg' },
        { id: 'h4', name: 'Bamileke Gong Cameroon', price: 39.99, rating: 4.2, image: '/images/bimelik.jpg' },
        { id: 'h5', name: 'Native Bashes and Shells', price: 129.99, rating: 4.8, image: '/images/bashes.jpg' }
    ],
    beauty: [
        { id: 'b1', name: 'Farm Local Foods', price: 24.99, rating: 4.6, image: '/images/localfood.jpg' },
        { id: 'b2', name: 'Ghanaian Dish (Ampasie)', price: 59.99, rating: 4.3, image: '/images/yam.jpg' },
        { id: 'b3', name: 'Local Dish', price: 79.99, rating: 4.7, image: '/images/rice.jpg' },
        { id: 'b4', name: 'Chai ya Tangawizi (Kenyan Beverage)', price: 89.99, rating: 4.4, image: '/images/beverage1.jpg' },
        { id: 'b5', name: 'Sobolo (Ghanaian Beverage)', price: 49.99, rating: 4.5, image: '/images/sobolo.jpg' }
    ],
    sports: [
        { id: 's1', name: 'Central African Interior', price: 29.99, rating: 4.5, image: '/images/furniture1.jpg' },
        { id: 's2', name: 'Outter Set ', price: 49.99, rating: 4.6, image: '/images/furniture2.jpg' },
        { id: 's3', name: 'Local Stool', price: 89.99, rating: 4.3, image: '/images/stool1.jpg' },
        { id: 's4', name: 'Local Gynyame Stool', price: 24.99, rating: 4.4, image: '/images/stool2.jpg' },
        { id: 's5', name: 'Mali Ancient Cultural Stool', price: 59.99, rating: 4.7, image: '/images/stool3.jpg' }
    ],
    toys: [
        { id: 't1', name: 'Wrapper designs', price: 39.99, rating: 4.3, image: '/images/bottle.jpg' },
        { id: 't2', name: 'Local Liquid Holders', price: 19.99, rating: 4.5, image: '/images/enclose.jpg' },
        { id: 't3', name: 'Music Intrument', price: 29.99, rating: 4.7, image: '/images/enclose2.jpg' },
        { id: 't4', name: 'Plate Ceremics', price: 14.99, rating: 4.2, image: '/images/banner2.jpg' },
        { id: 't5', name: 'Building Blocks', price: 34.99, rating: 4.6, image: '/images/slider5.jpg' }
    ]

    };

    // Cart data
    let cart = [];
    let currentProduct = null;

    // DOM Elements
    const mainContent = document.getElementById('main-content');
    const searchResults = document.getElementById('search-results');
    const cartPage = document.getElementById('cart-page');
    const quantityModal = document.getElementById('quantity-modal');
    const productDetailModal = document.getElementById('product-detail-modal');
    const cartCountElement = document.getElementById('cart-count');
    const modalProductName = document.getElementById('modal-product-name');
    const quantityInput = document.getElementById('quantity-input');
    const searchInput = document.getElementById('search-input');

    // Initialize the store
    function initStore() {
        // Render all product sections
        for (const category in products) {
            renderProductGrid(category);
        }

        // Setup event listeners
        setupEventListeners();
        
        // Start slider
        startSlider();
        
        // Start countdown timer
        startCountdown();
    }

    // Render product grid for a category
    function renderProductGrid(category) {
        const grid = document.getElementById(`${category}-grid`);
        grid.innerHTML = '';
        
        products[category].forEach(product => {
            const productCard = createProductCard(product);
            grid.appendChild(productCard);
        });
    }

    // Create a product card element
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-id', product.id);
        
        card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="rating">
            ${'<i class="fas fa-star"></i>'.repeat(Math.floor(product.rating))}
            ${product.rating % 1 ? '<i class="fas fa-star-half-alt"></i>' : ''}
            ${5 - Math.ceil(product.rating) > 0 ? '<i class="far fa-star"></i>'.repeat(5 - Math.ceil(product.rating)) : ''}
            <span>${product.rating}</span>
        </div>
        <button class="add-to-cart" data-id="${product.id}">
            <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
        <button class="view-comments" data-id="${product.id}" style="margin-top:10px; background-color:#2ecc71; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">View Comments</button>
        <div class="comments-popup" id="comments-${product.id}" style="display:none; margin-top:10px; background:#ecf0f1; padding:10px; border-radius:5px; font-size:0.9rem;">
            <p><strong>John:</strong> Amazing quality!</p>
            <p><strong>Lisa:</strong> Loved it, fast shipping!</p>
        </div>
    </div>
`;

        
        return card;
    }

    // Handle View Comments button
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('view-comments')) {
        const productId = event.target.getAttribute('data-id');
        const commentsDiv = document.getElementById('comments-' + productId);
        commentsDiv.style.display = commentsDiv.style.display === 'none' ? 'block' : 'none';
    }
});


    // Setup all event listeners
    function setupEventListeners() {
        // Account dropdown toggle
        document.getElementById('account-item').addEventListener('click', function() {
            document.getElementById('account-dropdown').style.display = 
                document.getElementById('account-dropdown').style.display === 'block' ? 'none' : 'block';
        });
        
        // Close dropdown when clicking elsewhere
        document.addEventListener('click', function(event) {
            if (!event.target.closest('#account-item')) {
                document.getElementById('account-dropdown').style.display = 'none';
            }
        });
        
        // Category selection
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', function() {
                const sectionId = this.getAttribute('data-section');
                const section = document.getElementById(sectionId);
                section.scrollIntoView({ behavior: 'smooth' });
            });
        });
        
        // Add to cart buttons
        document.addEventListener('click', function(event) {
            if (event.target.closest('.add-to-cart')) {
                const button = event.target.closest('.add-to-cart');
                const productId = button.getAttribute('data-id');
                showQuantityModal(productId);
            }
        });
        
        // Cart icon click
        document.getElementById('cart-item').addEventListener('click', function() {
            showCartPage();
        });
        
        // Close quantity modal
        document.getElementById('close-quantity-modal').addEventListener('click', function() {
            quantityModal.style.display = 'none';
        });
        
        // Close detail modal
        document.getElementById('close-detail-modal').addEventListener('click', function() {
            productDetailModal.style.display = 'none';
        });
        
        // Quantity controls
        document.getElementById('decrease-qty').addEventListener('click', function() {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });
        
        document.getElementById('increase-qty').addEventListener('click', function() {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });
        
        // Confirm quantity
        document.getElementById('confirm-quantity').addEventListener('click', function() {
            addToCart(currentProduct, parseInt(quantityInput.value));
            quantityModal.style.display = 'none';
        });
        
        // Product card click (for details)
        document.addEventListener('click', function(event) {
            if (event.target.closest('.product-card') && !event.target.closest('.add-to-cart')) {
                const card = event.target.closest('.product-card');
                const productId = card.getAttribute('data-id');
                showProductDetails(productId);
            }
        });
        
        // Add to cart from detail view
        document.getElementById('add-to-cart-detail').addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('detail-quantity').value);
            addToCart(currentProduct, quantity);
            productDetailModal.style.display = 'none';
        });
        
        // Back from cart button
        document.getElementById('back-from-cart').addEventListener('click', function(e) {
            e.preventDefault();
            cartPage.style.display = 'none';
            mainContent.style.display = 'flex';
        });
        
        // Back from search button
        document.getElementById('back-from-search').addEventListener('click', function(e) {
            e.preventDefault();
            searchResults.style.display = 'none';
            mainContent.style.display = 'flex';
        });
        
        // Search functionality
        document.getElementById('search-button').addEventListener('click', function() {
            performSearch();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Remove from cart
        document.addEventListener('click', function(event) {
            if (event.target.closest('.remove-btn')) {
                const button = event.target.closest('.remove-btn');
                const productId = button.getAttribute('data-id');
                removeFromCart(productId);
            }
        });
        
        // Window close quantity modal
        window.addEventListener('click', function(event) {
            if (event.target === quantityModal) {
                quantityModal.style.display = 'none';
            }
            if (event.target === productDetailModal) {
                productDetailModal.style.display = 'none';
            }
        });

        // Listen to typing in search input
searchInput.addEventListener('input', function() {
    const query = searchInput.value.trim().toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';

    if (query.length === 0) {
        suggestionsBox.style.display = 'none';
        return;
    }

    const matches = [];
    for (const category in products) {
        for (const product of products[category]) {
            if (product.name.toLowerCase().includes(query)) {
                matches.push(product);
            }
        }
    }

    if (matches.length === 0) {
        suggestionsBox.innerHTML = '<div style="padding:10px;">No results found</div>';
    } else {
        matches.forEach(product => {
            const div = document.createElement('div');
            div.textContent = product.name;
            div.style.padding = '10px';
            div.style.cursor = 'pointer';
            div.addEventListener('click', function() {
                const productCard = document.querySelector(`.product-card[data-id="${product.id}"]`);
                if (productCard) {
                    productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    productCard.style.border = '2px solid var(--primary-color)';
                    setTimeout(() => {
                        productCard.style.border = '';
                    }, 2000);
                }
                suggestionsBox.style.display = 'none';
                searchInput.value = '';
            });
            div.addEventListener('mouseover', function() {
                div.style.backgroundColor = '#f0f0f0';
            });
            div.addEventListener('mouseout', function() {
                div.style.backgroundColor = 'white';
            });
            suggestionsBox.appendChild(div);
        });
    }

    suggestionsBox.style.display = 'block';
});

// Hide suggestions if click outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('#search-input') && !event.target.closest('#suggestions')) {
        document.getElementById('suggestions').style.display = 'none';
    }
});

    }

    // Show quantity modal
    function showQuantityModal(productId) {
        currentProduct = findProductById(productId);
        modalProductName.textContent = currentProduct.name;
        quantityInput.value = 1;
        quantityModal.style.display = 'block';
    }

    // Show product details
    function showProductDetails(productId) {
        currentProduct = findProductById(productId);
        
        document.getElementById('detail-image').src = currentProduct.image;
        document.getElementById('detail-name').textContent = currentProduct.name;
        document.getElementById('detail-price').textContent = `$${currentProduct.price.toFixed(2)}`;
        document.getElementById('detail-rating').textContent = currentProduct.rating;
        document.getElementById('detail-quantity').value = 1;
        
        productDetailModal.style.display = 'block';
    }
    // Add to your shop.js file
function setupReviewSystem() {
    const isLoggedIn = false; // Replace with actual authentication check
    
    const reviewForm = document.getElementById('review-form');
    const loginPrompt = document.getElementById('review-login-prompt');
    
    if (isLoggedIn) {
        reviewForm.style.display = 'block';
        loginPrompt.style.display = 'none';
    } else {
        reviewForm.style.display = 'none';
        loginPrompt.style.display = 'block';
    }
    
    // Handle review submission
    document.getElementById('submit-review').addEventListener('click', function() {
        if (!isLoggedIn) {
            alert('Please create an account or sign in to leave a review.');
            return;
        }
        
        const rating = document.getElementById('review-rating').value;
        const text = document.getElementById('review-text').value;
        
        if (!text.trim()) {
            alert('Please enter your review text.');
            return;
        }
        
        // Here you would typically send the review to your backend
        addReviewToProduct(currentProduct.id, rating, text);
        document.getElementById('review-text').value = '';
    });
}

function addReviewToProduct(productId, rating, text) {
    // This would typically be an API call to your backend
    console.log(`Adding review to product ${productId}: ${rating} stars - ${text}`);
    
    // For demo purposes, we'll just add it to the UI
    const reviewsContainer = document.getElementById('existing-reviews');
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';
    reviewElement.innerHTML = `
        <div class="review-header">
            <span>You</span>
            <div class="rating">
                ${'<i class="fas fa-star"></i>'.repeat(rating)}
                ${5 - rating > 0 ? '<i class="far fa-star"></i>'.repeat(5 - rating) : ''}
            </div>
            <span class="review-date">Just now</span>
        </div>
        <p>${text}</p>
    `;
    
    reviewsContainer.prepend(reviewElement);
    
    // Show a success message
    const successMsg = document.createElement('div');
    successMsg.className = 'review-success';
    successMsg.textContent = 'Thank you for your review!';
    reviewsContainer.parentNode.insertBefore(successMsg, reviewsContainer.nextSibling);
    
    setTimeout(() => {
        successMsg.style.opacity = '0';
        setTimeout(() => successMsg.remove(), 500);
    }, 3000);
}

// Add this CSS for the review success message
const reviewStyle = document.createElement('style');
reviewStyle.textContent = `
    .review-success {
        background-color: var(--success-color);
        color: white;
        padding: 10px;
        border-radius: 5px;
        margin: 10px 0;
        text-align: center;
        transition: opacity 0.5s;
    }
    .add-review {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #eee;
    }
`;
document.head.appendChild(reviewStyle);

// Call this function when showing product details
function showProductDetails(productId) {
    currentProduct = findProductById(productId);
    
    document.getElementById('detail-image').src = currentProduct.image;
    document.getElementById('detail-name').textContent = currentProduct.name;
    document.getElementById('detail-price').textContent = `$${currentProduct.price.toFixed(2)}`;
    document.getElementById('detail-rating').textContent = currentProduct.rating;
    document.getElementById('detail-quantity').value = 1;
    
    // Initialize review system
    setupReviewSystem();
    
    productDetailModal.style.display = 'block';
}

    // Add product to cart
    function addToCart(product, quantity) {
        const existingItemIndex = cart.findIndex(item => item.id === product.id);
        
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
        
        updateCartCount();
    }
    // Update your addToCart function:
function addToCart(product, quantity) {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    updateCartCount();
    animateWallet();
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add this new function:
function animateWallet() {
    const walletIcon = document.querySelector('#wallet-item i');
    const walletText = document.querySelector('#wallet-item .hover-text');
    
    // Add animation classes
    walletIcon.classList.add('wallet-alert');
    walletText.classList.add('wallet-hover-text');
    
    // Remove animations after they complete
    setTimeout(() => {
        walletIcon.classList.remove('wallet-alert');
        walletText.classList.remove('wallet-hover-text');
    }, 1500); // Matches 3 iterations of 0.5s animations
}

// Update your existing wallet click handler:
document.getElementById('wallet-item').addEventListener('click', function() {
    // Only redirect if cart is not empty
    if (cart.length > 0) {
        window.location.href = 'payment.html';
    } else {
        alert('Your cart is empty. Add some items before proceeding to payment.');
    }
});

    // Remove item from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        renderCartItems();
    }

    // Update cart count
    function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = count;
    
    // Also update the wallet hover text
    document.getElementById('cart-total-items').textContent = count;
}

    // Show cart page
    function showCartPage() {
        mainContent.style.display = 'none';
        searchResults.style.display = 'none';
        cartPage.style.display = 'block';
        
        renderCartItems();
    }

    // Render cart items
    function renderCartItems() {
        const cartBody = document.getElementById('cart-items-body');
        cartBody.innerHTML = '';
        
        if (cart.length === 0) {
            cartBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">Your cart is empty</td></tr>';
            updateCartSummary(0, 0, 0);
            return;
        }
        
        let subtotal = 0;
        
        cart.forEach(item => {
            const total = item.price * item.quantity;
            subtotal += total;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${item.image}" alt="${item.name}" class="item-image"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${total.toFixed(2)}</td>
                <td><i class="fas fa-trash remove-btn" data-id="${item.id}"></i></td>
            `;
            
            cartBody.appendChild(row);
        });
        
        const shipping = subtotal > 50 ? 0 : 10;
        const tax = subtotal * 0.1;
        
        updateCartSummary(subtotal, shipping, tax);
    }

    // Update cart summary
    function updateCartSummary(subtotal, shipping, tax) {
        document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('cart-shipping').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
        document.getElementById('cart-total').textContent = `$${(subtotal + shipping + tax).toFixed(2)}`;
    }

    // Find product by ID
    function findProductById(productId) {
        for (const category in products) {
            const product = products[category].find(p => p.id === productId);
            if (product) return product;
        }
        return null;
    }

    // Perform search
   // Updated performSearch function
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (query === '') return;

    let found = false;

    // Loop through all products
    for (const category in products) {
        const productList = products[category];
        for (const product of productList) {
            if (product.name.toLowerCase().includes(query)) {
                // Found the product
                found = true;
                // Find the product card
                const productCard = document.querySelector(`.product-card[data-id="${product.id}"]`);
                if (productCard) {
                    productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    productCard.style.border = '2px solid var(--primary-color)'; // highlight found product
                    setTimeout(() => {
                        productCard.style.border = ''; // remove highlight after 2 seconds
                    }, 2000);
                }
                break;
            }
        }
        if (found) break; // stop looping
    }

    // If not found
    if (!found) {
        alert('No matching product found.');
    }

    // Clear the search bar
    searchInput.value = '';
}

    // Start image slider
    function startSlider() {
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // Start countdown timer
    function startCountdown() {
        const timerElement = document.getElementById('timer');
        let hours = 23;
        let minutes = 59;
        let seconds = 59;
        
        const timer = setInterval(() => {
            seconds--;
            
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                    
                    if (hours < 0) {
                        clearInterval(timer);
                        return;
                    }
                }
            }
            
            timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

   
    document.addEventListener('DOMContentLoaded', initStore);




    document.getElementById('wallet-item').addEventListener('click', function() {
    window.location.href = 'payment.html'; // Replace with your actual payment page path
});