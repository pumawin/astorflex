$(function () {
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  new Vivus(
    "Secondlife",
    {
      duration: 100,
      type: "delayed",
      animTimingFunction: Vivus.EASE,
    },
    function (obj) {
      obj.el.classList.add("finished");
    }
  );
  AOS.init();
});
