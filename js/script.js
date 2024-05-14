$(function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 26.99,
    slidesPerGroup: 2,
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
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    slidesPerGroup: 1,

    spaceBetween: 50,
    centeredSlides: true,
    // preventClicks: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    centeredSlides: true,
    on: {
      init: function () {
        $(".swiper-slide").addClass("changed");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-slide").addClass("changing");
        $(".swiper-slide").removeClass("changed");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-slide").removeClass("changing");
        $(".swiper-slide").addClass("changed");
      },
      slideChange: function () {
        const sIdx = this.realIndex;
        // console.log(this);

        const slideInfo = $(".slide-info li");
        slideInfo.removeClass("active");
        slideInfo.eq(sIdx).addClass("active");
      },
    },
  });
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  new Vivus(
    "responsible",
    {
      duration: 100,
      type: "delayed",
      animTimingFunction: Vivus.EASE,
    },
    function (obj) {
      obj.el.classList.add("finished");
    }
  );
  new Vivus(
    "Transparent",
    {
      duration: 100,
      type: "delayed",
      animTimingFunction: Vivus.EASE,
    },
    function (obj) {
      obj.el.classList.add("finished");
    }
  );
  new Vivus(
    "Sagacious",
    {
      duration: 100,
      type: "delayed",
      animTimingFunction: Vivus.EASE,
    },
    function (obj) {
      obj.el.classList.add("finished");
    }
  );
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
