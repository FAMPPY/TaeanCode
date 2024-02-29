document.addEventListener("DOMContentLoaded", function () {
  /* main-slide */
  let mainSwiper = new Swiper(".main-swiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* youth-supply-swiper */
  const supplySwiper = new Swiper(".youth-supply-swiper", {
    slidesPerView: 4.3,
    spaceBetween: 24,
    speed:1200,
    autoplay: {
      delay: 1800,
    },
    loop: true,
  });
  /* hot-swiper */
  let hotSwiper = new Swiper(".hot-swiper", {
    slidesPerView: 3.05,
    spaceBetween: 34,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 1800,
    },
    speed: 1500,
  });

  /* aos js */
  AOS.init({
    duration: 1200,
  });
}); /* document ready 끝 */
