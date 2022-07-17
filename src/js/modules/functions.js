// Проверка поддержки webp, добавление класса webp или no-webp для HTML
export function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  // Добавление класса _webp или _no-webp для HTML 
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  });
}

export function addFavorites() {
  document.querySelectorAll('.btn-favorites').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('btn-favorites_active')
    })
  })
}

export function isBurger() {
  const burgerBtn = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const popup = menu.parentElement
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.add('burger_active')
    popup.classList.add('popup_active')
    menu.classList.add('menu_active')
    document.body.parentElement.style.overflowY = 'hidden'
  })
  popup.addEventListener('click', (e) => {
    if (!e.target.closest('.menu')) {
      burgerBtn.classList.remove('burger_active')
      popup.classList.remove('popup_active')
      menu.classList.remove('menu_active')
      document.body.parentElement.style.overflowY = 'unset'
    }
  })
}

export function isSearch() {
  const search = document.querySelector('.search')
  const searchBtn = search.querySelector('.search__btn')
  const searchField = search.querySelector('.search__field')
  const header = search.closest('.header')
  searchBtn.addEventListener('click', () => {
    search.classList.add('search_active')
    header.querySelector('.header__logo').classList.add('visually-hidden')
    header.querySelector('.header__user-nav').classList.add('visually-hidden')
  })
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search')) {
      search.classList.remove('search_active')
      searchField.value = ""
      setTimeout(() => {
        header.querySelector('.header__logo').classList.remove('visually-hidden')
        header.querySelector('.header__user-nav').classList.remove('visually-hidden')
      }, 500);
    }
  })
}

export function isAccordion() {
  document.querySelectorAll('.acc').forEach(acc => {
    const accBtn = acc.querySelector('.acc__trigger')
    const accPanel = acc.querySelector('.acc__panel')
    accBtn.addEventListener('click', function () {
      acc.classList.toggle('acc_active')
      if (accPanel.style.maxHeight) {
        accPanel.style.maxHeight = null;
      } else {
        accPanel.style.maxHeight = accPanel.scrollHeight + "px";
      }
    })
  })
}