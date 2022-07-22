import Swiper, {
  Navigation,
  Scrollbar,
  Thumbs,
  Keyboard,
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
    // when window width is >= 480
    480: {
      slidesPerView: 2,
      spaceBetween: 8
    },
    // when window width is >= 768
    768: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    // when window width is >= 1000
    1000: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is >= 1280
    1280: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
})

const swiperProducts = new Swiper('.product__swiper', {
  modules: [Scrollbar],
  slidesPerView: 1,
  spaceBetween: 4,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

