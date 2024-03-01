document.addEventListener("DOMContentLoaded", function () {
  /* youth-supply-swiper */
  const supplySwiper = new Swiper(".youth-supply-swiper", {
    slidesPerView: 4.3,
    spaceBetween: 24,
    speed: 1200,
    autoplay: {
      delay: 1200,
    },
    loop: true,
  });
  /* hot-swiper */
  let hotSwiper = new Swiper(".hot-swiper", {
    slidesPerView: 3.05,
    spaceBetween: 34,
    navigation: {
      nextEl: ".hot-commu-section .swiper-button-next",
      prevEl: ".hot-commu-section .swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 1800,
    },
    speed: 1500,
  });
  let hotSlideToggle = document.querySelector(".hot-swiper-play-btn");
  let isHotAutoplay = true;

  hotSlideToggle.addEventListener("click", function (e) {
    if (isHotAutoplay) {
      hotSwiper.autoplay.stop();
      e.target.classList.toggle("active");
    } else {
      hotSwiper.autoplay.start();
      e.target.classList.toggle("active");
    }
    isHotAutoplay = !isHotAutoplay;
  });
  /* main-slide */
  let mainSwiper = new Swiper(".main-swiper", {
    loop: true,
    pagination: {
      el: ".main-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-swiper .swiper-button-next",
      prevEl: ".main-swiper .swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 1800,
    },
    speed: 800,
  });
  let mainSlideToggle = document.querySelector(".main-swiper-play-btn");
  let isAutoplay = true;

  mainSlideToggle.addEventListener("click", function (e) {
    if (isAutoplay) {
      mainSwiper.autoplay.stop();
      e.target.classList.toggle("active");
    } else {
      mainSwiper.autoplay.start();
      e.target.classList.toggle("active");
    }
    isAutoplay = !isAutoplay;
  });

  /* aos js */
  AOS.init({
    duration: 1200,
  });
}); /* document ready 끝 */
