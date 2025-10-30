
  document.addEventListener('DOMContentLoaded', function() {
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

