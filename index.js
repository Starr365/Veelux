
  document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');

  function toggleMobileMenu() {
    navUl.classList.toggle('show');
  }

  hamburger.addEventListener('click', toggleMobileMenu);

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navUl.classList.remove('show');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = navUl.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
      navUl.classList.remove('show');
    }
  });

  const swiper = new Swiper('.brandSwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1500,
    breakpoints: {
      320: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      }
    }
  });

  // Contact form validation and submission
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email.');
      return;
    }

    successMessage.style.display = 'block';
    contactForm.reset();
  });

  


  // Cart functionality
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartModal = document.getElementById('cart-modal');
  const cartItems = document.getElementById('cart-items');
  const checkoutBtn = document.getElementById('checkout-btn');
  const cartBtn = document.querySelector('.cart-btn');
  const cartCountEl = document.querySelector('.cart-count');
  const cartTotalEl = document.getElementById('cart-total');
  const cartCloseBtn = document.getElementById('cart-close');

  function formatNumber(n){
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function updateCartDisplay() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
        ${item.image ? `<img src="${item.image}" alt="${item.name}" />` : ''}
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-meta">₦${formatNumber(item.price)} x ${item.quantity}</div>
        </div>
        <div class="cart-item-actions">
          <button data-action="inc" data-index="${index}">+</button>
          <button data-action="dec" data-index="${index}">-</button>
          <button data-action="remove" data-index="${index}">Remove</button>
        </div>
      `;
      cartItems.appendChild(itemDiv);
      total += Number(item.price) * item.quantity;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    cartTotalEl.textContent = formatNumber(total);
    updateCartCount();
  }

  function updateCartCount(){
    const count = cart.reduce((sum, it) => sum + (it.quantity || 0), 0);
    if(!cartCountEl) return;
    cartCountEl.textContent = count;
    cartCountEl.style.display = count > 0 ? 'inline-block' : 'none';
  }

  window.editQuantity = function(index, change) {
    if(!cart[index]) return;
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    updateCartDisplay();
  };

  window.removeItem = function(index) {
    cart.splice(index, 1);
    updateCartDisplay();
  };

  checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    // Placeholder checkout behavior
    alert('Checkout successful! Thank you for your purchase.');
    cart = [];
    updateCartDisplay();
    cartModal.classList.remove('open');
    cartModal.setAttribute('aria-hidden', 'true');
  });

  // Open/close modal
  cartBtn.addEventListener('click', function(event) {
    event.preventDefault();
    updateCartDisplay();
    cartModal.classList.add('open');
    cartModal.setAttribute('aria-hidden', 'false');
  });

  // Product Checkout button

  document.querySelectorAll('#checkout-after-grid').forEach(el => {
    el.addEventListener('click', function(e){
      e.preventDefault();
      updateCartDisplay();
      cartModal.classList.add('open');
      cartModal.setAttribute('aria-hidden', 'false');
      // move focus into the cart for accessibility (optional)
      const firstFocusable = cartModal.querySelector('.cart-panel button, .cart-panel [href], .cart-panel input');
      if(firstFocusable) firstFocusable.focus();
    });
  });

  cartCloseBtn.addEventListener('click', function(){
    cartModal.classList.remove('open');
    cartModal.setAttribute('aria-hidden', 'true');
  });

  // Close modal when clicking on overlay (outside panel)
  document.addEventListener('click', function(event) {
    if (event.target === cartModal) {
      cartModal.classList.remove('open');
      cartModal.setAttribute('aria-hidden', 'true');
    }
  });

  // Add to cart buttons (include image and numeric price parsing)
  document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
      const product = this.closest('.product');
      const name = product.querySelector('h3').textContent.trim();
      const priceRaw = product.querySelector('.price').textContent.replace('₦', '').trim();
      const price = Number(priceRaw.replace(/,/g, '')) || 0;
      const imageEl = product.querySelector('img');
      const image = imageEl ? imageEl.src : '';
      addToCart(name, price, image);
    });
  });

  function addToCart(name, price, image) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.quantity++;
    } else {
      cart.push({ name, price, quantity: 1, image });
    }
    updateCartDisplay();
  }

  // Delegate cart item buttons (+ - remove)
  cartItems.addEventListener('click', function(e){
    const btn = e.target.closest('button[data-action]');
    if(!btn) return;
    const action = btn.getAttribute('data-action');
    const index = Number(btn.getAttribute('data-index'));
    if(action === 'inc') window.editQuantity(index, 1);
    if(action === 'dec') window.editQuantity(index, -1);
    if(action === 'remove') window.removeItem(index);
  });

  // Initial cart display
  updateCartDisplay();
});

