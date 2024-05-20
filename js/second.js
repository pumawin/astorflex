$(function () {
  const $allMenu = $(".all-menu");
  const $btnMenu = $(".btn-menu");
  var ts;
  $(this).bind("touchstart", function (e) {
    e.stopPropagation();
    ts = e.originalEvent.touches[0].clientY;
  });
  if ($(window).width() < 1024) {
    $btnMenu.on("click", function (e) {
      e.preventDefault();
      $(this).add($allMenu).toggleClass("active");
    }),
      $(this).bind("touchend", function (e) {
        e.stopPropagation();
        var te = e.originalEvent.changedTouches[0].clientY;
        if (ts > te + 2) {
          $(this).add($allMenu).removeClass("active"),
            $(this).add($btnMenu).removeClass("active");
        }
      });
  } else {
    $btnMenu.on("click", function (e) {
      e.preventDefault();
      $(this).add($allMenu).toggleClass("active");
    });
  }
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
