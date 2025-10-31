
  document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul, nav .cart-btn');

  function toggleMobileMenu() {
    navUl.classList.toggle('show');
  }

  hamburger.addEventListener('click', toggleMobileMenu);

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('nav a, nav .cart-btn');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navUl.classList.remove('show');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = navUl.contains(event.target) || 
                         hamburger.contains(event.target) ||
                         event.target.closest('.cart-btn');
    
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
      delay: 1,
      disableOnInteraction: false,
    },
    speed: 1000,
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
});

