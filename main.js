const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var Myswiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
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

function menu() {
  const menu = document.getElementById("side-menu");

  if (menu.classList.contains("close")) {
    menu.classList.remove("close");
    menu.classList.add("open");
  } else {
    menu.classList.remove("open");
    menu.classList.add("close");
  }
}
