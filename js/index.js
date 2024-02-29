document.addEventListener("DOMContentLoaded", function () {
  /* youth-supply-swiper */
  const supplySwiper = new Swiper(".youth-supply-swiper", {
    slidesPerView: 4.3,
    spaceBetween: 24,
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
    speed:1500,
  });
}); /* document ready 끝 */
