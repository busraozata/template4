$(function () {
  $(".twentytwenty-container").twentytwenty({ default_offset_pct: 0.5 });
});
//Preloader

$("#preloader")
  .delay(1000)
  .fadeOut("slow", function () {
    $(this).remove();
  });

AOS.init();
const menuToggle = document.querySelector("#toggle-btn");
const navigation = document.querySelector(".nav-menu");
const headerInner = document.querySelector(".header-inner");
const listItem = document.querySelectorAll(".list-item");
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  headerInner.classList.toggle("bg-white");

  if (menuToggle.innerHTML === `<i class="fa-solid fa-xmark"></i>`) {
    menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;
  } else {
    menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  }
};
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".header-inner").addClass("sticky");
  } else {
    $(".header-inner").removeClass("sticky");
  }
});

var swiper = new Swiper(".mySwiperBanner", {
  slidesPerView: 1,
  direction: "vertical",
  autoplay: {
    delay: 3000,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".ourServices", {
  spaceBetween: 60,
  autoplay: {
    delay: 3000,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

$(function () {
  $("#datetimepicker2").datetimepicker({
    format: "DD-MM-YYYY",
  });
});

/* var swiper = new Swiper(".mySwiperLastPosts", {
  direction: "vertical",
  slidesPerView: 3,

  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
  },
}); */

var swiper = new Swiper(".mySwiperLastPosts", {
  direction: "vertical",
  autoplay: {
    delay: 1500,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 45,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(function () {
  var header = $(".banner .img-wrapper");
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      header.removeClass(".banner .img-wrapper").addClass("show");
    } else {
      header.removeClass(".banner .img-wrapper").removeClass("show");
    }
  });
});

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: ["slideShow", "thumbs", "zoom", "fullScreen", "share", "close"],
  loop: false,
  protect: true,
});
