
  document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');

  hamburger.addEventListener('click', function() {
    navUl.classList.toggle('show');
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navUl.classList.remove('show');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navUl.contains(event.target)) {
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

{/* <script type="speculationrules">
{
  "prerender": [{ "source": "document", "eagerness": "moderate" }]
}
</script> */}