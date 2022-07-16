import Swiper, {
  Navigation,
  Pagination,
  Thumbs,
  Keyboard
} from 'swiper';

const swiperSmilar = new Swiper('.similar-products__swiper', {
  modules: [Navigation],
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  simulateTouch: false,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

