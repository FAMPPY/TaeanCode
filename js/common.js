document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.querySelector(".top-btn");
  /* 스크롤 내릴시 topBtn active 클래스 추가 */

  function topBtnShow() {
    console.log("탑버튼")
    if (window.scrollY > 120) {
      topBtn.classList.add("active");
    } else {
      topBtn.classList.remove("active");
    }
  }
  window.addEventListener("scroll", topBtnShow);
}); /* 자바스크립트 끝 */
