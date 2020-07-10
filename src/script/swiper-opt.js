var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }
});