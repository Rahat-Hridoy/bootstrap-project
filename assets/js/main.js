// Hero Card
const initMySwiperHero = function () {
  var swiper = new Swiper(".mySwiperHero", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoint: {
      768: { slidesPerView: 1 },
      1400: { slidesPerView: 3 },
    },
  });
};

const initMySwiper = function () {
  const isMobile = window.matchMedia("max-width: 1400px").matches;
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: isMobile,
    centeredSlides: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: false,
    // },
    breakpoint: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 4 },
      1400: { slidesPerView: 5 },
    },
  });
};
