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
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
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
        updateSlideHeight();
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
  window.addEventListener("resize", updateSlideHeight);

  // 슬라이드 높이 업데이트 함수
  function updateSlideHeight() {
    const swiperContainer = document.querySelector(
      ".main-container .swiper-container"
    );
    var windowWidth = $(window).width();
    if (windowWidth < 604) {
      if (swiperContainer) {
        const newHeight = window.innerWidth * 1;
        swiperContainer.style.height = `${newHeight}px`;
      }
    } else {
      if (swiperContainer) {
        const newHeight = window.innerWidth * 0.34;
        swiperContainer.style.height = `${newHeight}px`;
      }
    }
  }

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
  AOS.init();
});
