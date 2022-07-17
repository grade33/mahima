import Swiper, {
  Navigation,
  Pagination,
  Thumbs,
  Keyboard
} from 'swiper';

const swiperSmilar = new Swiper('.similar-products__swiper', {
  modules: [Navigation],
  slidesPerView: 2,
  spaceBetween: 4,
  loop: true,
  simulateTouch: false,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
      spaceBetween: 8
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
})

