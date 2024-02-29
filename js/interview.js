document.addEventListener("DOMContentLoaded", function () {
  /* 셀렉트 버튼 커스텀 기능 */
  const selectTitle = document.querySelector(".select-title");
  const select = document.querySelector(".select");
  selectTitle.addEventListener("click", () => {
    selectTitle.classList.toggle("active");
  });
  select.addEventListener("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
      selectTitle.innerText = event.target.innerText;
      selectTitle.classList.remove("active");
    }
  });
  /* side-bar-item-title 클릭시 active 및 아코디언 */
  const sidebarItems = document.querySelectorAll(".side-bar-item");
  sidebarItems.forEach((item) => {
    const title = item.querySelector(".side-bar-item-title");
    title.addEventListener("click", () => {
      // 클릭된 타이틀에 active 클래스 추가
      title.classList.add("active");
      // 다른 타이틀들의 active 클래스 제거
      sidebarItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem
            .querySelector(".side-bar-item-title")
            .classList.remove("active");
        }
      });
    });
  });
}); /* 자바스크립트 끝 */
